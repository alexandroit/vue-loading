import { createLoader, type LoaderInstance, type LoaderTarget } from '@revivejs/loading';
import { getCurrentInstance, onBeforeUnmount } from 'vue-demi';

import type { LoadingController, VueLoadingOptions } from './types';

function mergeOptions(
  baseOptions: VueLoadingOptions,
  target?: LoaderTarget,
  nextOptions?: VueLoadingOptions
) {
  const mergedOptions: VueLoadingOptions = {
    ...baseOptions,
    ...(nextOptions || {})
  };

  if (typeof target !== 'undefined') {
    mergedOptions.target = target;
  }

  return mergedOptions;
}

export function createLoadingController(
  defaultOptions: VueLoadingOptions = {}
): LoadingController {
  let instance: LoaderInstance | null = null;

  function ensureInstance(target?: LoaderTarget, nextOptions?: VueLoadingOptions) {
    const mergedOptions = mergeOptions(defaultOptions, target, nextOptions);

    if (!instance) {
      instance = createLoader({
        ...mergedOptions,
        visible: false
      });
      return instance;
    }

    if (typeof mergedOptions.target !== 'undefined') {
      instance.mount(mergedOptions.target);
    }

    instance.update(mergedOptions);
    return instance;
  }

  return {
    create(target?: LoaderTarget, nextOptions?: VueLoadingOptions) {
      return ensureInstance(target, nextOptions);
    },
    mount(target?: LoaderTarget, nextOptions?: VueLoadingOptions) {
      return ensureInstance(target, nextOptions);
    },
    async show(target?: LoaderTarget, nextOptions?: VueLoadingOptions) {
      const current = ensureInstance(target, nextOptions);
      await current.show();
      return current;
    },
    hide() {
      return instance ? instance.hide() : Promise.resolve();
    },
    toggle(force?: boolean) {
      return instance ? instance.toggle(force) : Promise.resolve();
    },
    update(nextOptions: Partial<VueLoadingOptions>) {
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

export function useLoading(defaultOptions: VueLoadingOptions = {}) {
  const controller = createLoadingController(defaultOptions);

  if (getCurrentInstance()) {
    onBeforeUnmount(() => {
      controller.destroy();
    });
  }

  return controller;
}
