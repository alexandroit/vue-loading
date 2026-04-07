import {
  createLoader,
  type LoaderInstance
} from '@revivejs/loading';
import type {
  Directive,
  DirectiveBinding
} from 'vue-demi';

import type {
  VueLoadingDirectiveValue,
  VueLoadingOptions
} from './types';

const instances = new WeakMap<HTMLElement, LoaderInstance>();

type LoadingDirectiveBinding = DirectiveBinding<VueLoadingDirectiveValue | VueLoadingOptions | boolean>;
type LegacyDirectiveHooks = {
  bind?: (element: HTMLElement, binding: LoadingDirectiveBinding) => void;
  inserted?: (element: HTMLElement, binding: LoadingDirectiveBinding) => void;
  update?: (element: HTMLElement, binding: LoadingDirectiveBinding) => void;
  unbind?: (element: HTMLElement) => void;
};

function normalizeValue(value: VueLoadingDirectiveValue | VueLoadingOptions | boolean | undefined) {
  if (typeof value === 'boolean') {
    return {
      visible: value,
      options: {}
    };
  }

  if (value && typeof value === 'object' && ('visible' in value || 'options' in value)) {
    const directiveValue = value as VueLoadingDirectiveValue;

    return {
      visible: typeof directiveValue.visible === 'boolean' ? directiveValue.visible : true,
      options: directiveValue.options || {}
    };
  }

  return {
    visible: true,
    options: (value || {}) as VueLoadingOptions
  };
}

function ensureDirectiveLoader(
  element: HTMLElement,
  binding: LoadingDirectiveBinding
) {
  const normalized = normalizeValue(binding.value);
  const existing = instances.get(element);

  if (!existing) {
    const instance = createLoader({
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

function syncDirectiveLoader(
  element: HTMLElement,
  binding: LoadingDirectiveBinding
) {
  const { instance, normalized } = ensureDirectiveLoader(element, binding);

  if (normalized.visible) {
    void instance.show();
    return;
  }

  void instance.hide();
}

function destroyDirectiveLoader(element: HTMLElement) {
  const instance = instances.get(element);

  if (instance) {
    instance.destroy();
    instances.delete(element);
  }
}

export const reviveLoadingDirective: Directive & LegacyDirectiveHooks = {
  mounted(element, binding) {
    syncDirectiveLoader(element as HTMLElement, binding as LoadingDirectiveBinding);
  },
  updated(element, binding) {
    syncDirectiveLoader(element as HTMLElement, binding as LoadingDirectiveBinding);
  },
  beforeUnmount(element) {
    destroyDirectiveLoader(element as HTMLElement);
  },
  bind(element: HTMLElement, binding: LoadingDirectiveBinding) {
    syncDirectiveLoader(element, binding);
  },
  inserted(element: HTMLElement, binding: LoadingDirectiveBinding) {
    syncDirectiveLoader(element, binding);
  },
  update(element: HTMLElement, binding: LoadingDirectiveBinding) {
    syncDirectiveLoader(element, binding);
  },
  unbind(element: HTMLElement) {
    destroyDirectiveLoader(element);
  }
};
