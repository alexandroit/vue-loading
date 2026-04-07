// src/Loading.ts
import { createLoader } from "@revivejs/loading";
import {
  defineComponent,
  h,
  onBeforeUnmount,
  onMounted,
  ref,
  watch
} from "vue-demi";
function ensureInstance(host, options, current) {
  if (!host) {
    return null;
  }
  if (!current) {
    return createLoader({
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
var ReviveLoading = defineComponent({
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
    const hostRef = ref(null);
    const instanceRef = ref(null);
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
    onMounted(() => {
      instanceRef.value = ensureInstance(hostRef.value, props.options || {}, instanceRef.value);
      if (instanceRef.value) {
        emit("create", instanceRef.value);
      }
      syncLoader();
    });
    watch(
      () => props.visible,
      () => {
        syncLoader();
      }
    );
    watch(
      () => props.options,
      () => {
        syncLoader();
      },
      { deep: true }
    );
    onBeforeUnmount(() => {
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
    return () => h(
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
import {
  createLoader as createLoader2
} from "@revivejs/loading";
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
    const instance = createLoader2({
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
import { createLoader as createLoader3 } from "@revivejs/loading";
import { getCurrentInstance, onBeforeUnmount as onBeforeUnmount2 } from "vue-demi";
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
      instance = createLoader3({
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
  if (getCurrentInstance()) {
    onBeforeUnmount2(() => {
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
import {
  applyThemeTokens,
  createLoader as createLoader4,
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
  showLoader
} from "@revivejs/loading";
export {
  ReviveLoading,
  VueLoading,
  applyThemeTokens,
  createLoader4 as createLoader,
  createLoadingController,
  darkTheme,
  plugin_default as default,
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
};
//# sourceMappingURL=index.js.map