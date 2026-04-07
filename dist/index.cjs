"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  ReviveLoading: () => ReviveLoading,
  VueLoading: () => VueLoading,
  applyThemeTokens: () => import_loading4.applyThemeTokens,
  createLoader: () => import_loading4.createLoader,
  createLoadingController: () => createLoadingController,
  darkTheme: () => import_loading4.darkTheme,
  default: () => plugin_default,
  defaultLoaderOptions: () => import_loading4.defaultLoaderOptions,
  getLoaderStyles: () => import_loading4.getLoaderStyles,
  getVariantDefinition: () => import_loading4.getVariantDefinition,
  getVariantStyles: () => import_loading4.getVariantStyles,
  hideLoader: () => import_loading4.hideLoader,
  hydrateLoaders: () => import_loading4.hydrateLoaders,
  lightTheme: () => import_loading4.lightTheme,
  loaderVariants: () => import_loading4.loaderVariants,
  mountLoader: () => import_loading4.mountLoader,
  reviveLoadingDirective: () => reviveLoadingDirective,
  showLoader: () => import_loading4.showLoader,
  useLoading: () => useLoading
});
module.exports = __toCommonJS(index_exports);

// src/Loading.ts
var import_loading = require("@revivejs/loading");
var import_vue_demi = require("vue-demi");
function ensureInstance(host, options, current) {
  if (!host) {
    return null;
  }
  if (!current) {
    return (0, import_loading.createLoader)({
      ...options,
      target: host,
      visible: false
    });
  }
  current.update({
    ...options,
    target: host
  });
  return current;
}
var ReviveLoading = (0, import_vue_demi.defineComponent)({
  name: "ReviveLoading",
  inheritAttrs: false,
  props: {
    visible: {
      type: Boolean,
      default: true
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["create", "shown", "hidden", "updated", "destroyed"],
  setup(props, { attrs, emit, expose, slots }) {
    const hostRef = (0, import_vue_demi.ref)(null);
    const instanceRef = (0, import_vue_demi.ref)(null);
    function syncLoader() {
      instanceRef.value = ensureInstance(hostRef.value, props.options || {}, instanceRef.value);
      if (!instanceRef.value) {
        return;
      }
      emit("updated", instanceRef.value);
      if (props.visible) {
        void instanceRef.value.show().then(() => {
          if (instanceRef.value) {
            emit("shown", instanceRef.value);
          }
        });
        return;
      }
      void instanceRef.value.hide().then(() => {
        if (instanceRef.value) {
          emit("hidden", instanceRef.value);
        }
      });
    }
    function destroyLoader() {
      if (instanceRef.value) {
        const current = instanceRef.value;
        current.destroy();
        instanceRef.value = null;
        emit("destroyed", current);
      }
    }
    (0, import_vue_demi.onMounted)(() => {
      instanceRef.value = ensureInstance(hostRef.value, props.options || {}, instanceRef.value);
      if (instanceRef.value) {
        emit("create", instanceRef.value);
      }
      syncLoader();
    });
    (0, import_vue_demi.watch)(
      () => props.visible,
      () => {
        syncLoader();
      }
    );
    (0, import_vue_demi.watch)(
      () => props.options,
      () => {
        syncLoader();
      },
      { deep: true }
    );
    (0, import_vue_demi.onBeforeUnmount)(() => {
      destroyLoader();
    });
    expose({
      getInstance() {
        return instanceRef.value;
      },
      show() {
        return instanceRef.value ? instanceRef.value.show() : Promise.resolve();
      },
      hide() {
        return instanceRef.value ? instanceRef.value.hide() : Promise.resolve();
      },
      toggle(force) {
        return instanceRef.value ? instanceRef.value.toggle(force) : Promise.resolve();
      },
      update(options) {
        if (instanceRef.value) {
          instanceRef.value.update(options);
        }
      },
      destroy() {
        destroyLoader();
      }
    });
    return () => (0, import_vue_demi.h)(
      "div",
      {
        ...attrs,
        ref: hostRef
      },
      slots.default ? slots.default() : void 0
    );
  }
});

// src/directive.ts
var import_loading2 = require("@revivejs/loading");
var instances = /* @__PURE__ */ new WeakMap();
function normalizeValue(value) {
  if (typeof value === "boolean") {
    return {
      visible: value,
      options: {}
    };
  }
  if (value && typeof value === "object" && ("visible" in value || "options" in value)) {
    const directiveValue = value;
    return {
      visible: typeof directiveValue.visible === "boolean" ? directiveValue.visible : true,
      options: directiveValue.options || {}
    };
  }
  return {
    visible: true,
    options: value || {}
  };
}
function ensureDirectiveLoader(element, binding) {
  const normalized = normalizeValue(binding.value);
  const existing = instances.get(element);
  if (!existing) {
    const instance = (0, import_loading2.createLoader)({
      ...normalized.options,
      target: element,
      visible: false
    });
    instances.set(element, instance);
    return {
      instance,
      normalized
    };
  }
  existing.update({
    ...normalized.options,
    target: element
  });
  return {
    instance: existing,
    normalized
  };
}
function syncDirectiveLoader(element, binding) {
  const { instance, normalized } = ensureDirectiveLoader(element, binding);
  if (normalized.visible) {
    void instance.show();
    return;
  }
  void instance.hide();
}
function destroyDirectiveLoader(element) {
  const instance = instances.get(element);
  if (instance) {
    instance.destroy();
    instances.delete(element);
  }
}
var reviveLoadingDirective = {
  mounted(element, binding) {
    syncDirectiveLoader(element, binding);
  },
  updated(element, binding) {
    syncDirectiveLoader(element, binding);
  },
  beforeUnmount(element) {
    destroyDirectiveLoader(element);
  },
  bind(element, binding) {
    syncDirectiveLoader(element, binding);
  },
  inserted(element, binding) {
    syncDirectiveLoader(element, binding);
  },
  update(element, binding) {
    syncDirectiveLoader(element, binding);
  },
  unbind(element) {
    destroyDirectiveLoader(element);
  }
};

// src/controller.ts
var import_loading3 = require("@revivejs/loading");
var import_vue_demi2 = require("vue-demi");
function mergeOptions(baseOptions, target, nextOptions) {
  const mergedOptions = {
    ...baseOptions,
    ...nextOptions || {}
  };
  if (typeof target !== "undefined") {
    mergedOptions.target = target;
  }
  return mergedOptions;
}
function createLoadingController(defaultOptions = {}) {
  let instance = null;
  function ensureInstance2(target, nextOptions) {
    const mergedOptions = mergeOptions(defaultOptions, target, nextOptions);
    if (!instance) {
      instance = (0, import_loading3.createLoader)({
        ...mergedOptions,
        visible: false
      });
      return instance;
    }
    if (typeof mergedOptions.target !== "undefined") {
      instance.mount(mergedOptions.target);
    }
    instance.update(mergedOptions);
    return instance;
  }
  return {
    create(target, nextOptions) {
      return ensureInstance2(target, nextOptions);
    },
    mount(target, nextOptions) {
      return ensureInstance2(target, nextOptions);
    },
    async show(target, nextOptions) {
      const current = ensureInstance2(target, nextOptions);
      await current.show();
      return current;
    },
    hide() {
      return instance ? instance.hide() : Promise.resolve();
    },
    toggle(force) {
      return instance ? instance.toggle(force) : Promise.resolve();
    },
    update(nextOptions) {
      if (!instance) {
        return null;
      }
      instance.update(nextOptions);
      return instance;
    },
    destroy() {
      if (instance) {
        instance.destroy();
        instance = null;
      }
    },
    getInstance() {
      return instance;
    }
  };
}
function useLoading(defaultOptions = {}) {
  const controller = createLoadingController(defaultOptions);
  if ((0, import_vue_demi2.getCurrentInstance)()) {
    (0, import_vue_demi2.onBeforeUnmount)(() => {
      controller.destroy();
    });
  }
  return controller;
}

// src/plugin.ts
var VueLoading = {
  install(app) {
    app.component("revive-loading", ReviveLoading);
    app.component("ReviveLoading", ReviveLoading);
    app.directive("revive-loading", reviveLoadingDirective);
  }
};
var plugin_default = VueLoading;

// src/index.ts
var import_loading4 = require("@revivejs/loading");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ReviveLoading,
  VueLoading,
  applyThemeTokens,
  createLoader,
  createLoadingController,
  darkTheme,
  defaultLoaderOptions,
  getLoaderStyles,
  getVariantDefinition,
  getVariantStyles,
  hideLoader,
  hydrateLoaders,
  lightTheme,
  loaderVariants,
  mountLoader,
  reviveLoadingDirective,
  showLoader,
  useLoading
});
//# sourceMappingURL=index.cjs.map