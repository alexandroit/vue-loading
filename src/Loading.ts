import { createLoader, type LoaderInstance } from '@revivejs/loading';
import {
  defineComponent,
  h,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
  type PropType
} from 'vue-demi';

import type { VueLoadingOptions } from './types';

function ensureInstance(
  host: HTMLElement | null,
  options: VueLoadingOptions,
  current: LoaderInstance | null
): LoaderInstance | null {
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

export const ReviveLoading = defineComponent({
  name: 'ReviveLoading',
  inheritAttrs: false,
  props: {
    visible: {
      type: Boolean,
      default: true
    },
    options: {
      type: Object as PropType<VueLoadingOptions>,
      default: () => ({})
    }
  },
  emits: ['create', 'shown', 'hidden', 'updated', 'destroyed'],
  setup(props, { attrs, emit, expose, slots }) {
    const hostRef = ref<HTMLElement | null>(null);
    const instanceRef = ref<LoaderInstance | null>(null);

    function syncLoader() {
      instanceRef.value = ensureInstance(hostRef.value, props.options || {}, instanceRef.value);

      if (!instanceRef.value) {
        return;
      }

      emit('updated', instanceRef.value);

      if (props.visible) {
        void instanceRef.value.show().then(() => {
          if (instanceRef.value) {
            emit('shown', instanceRef.value);
          }
        });
        return;
      }

      void instanceRef.value.hide().then(() => {
        if (instanceRef.value) {
          emit('hidden', instanceRef.value);
        }
      });
    }

    function destroyLoader() {
      if (instanceRef.value) {
        const current = instanceRef.value;
        current.destroy();
        instanceRef.value = null;
        emit('destroyed', current);
      }
    }

    onMounted(() => {
      instanceRef.value = ensureInstance(hostRef.value, props.options || {}, instanceRef.value);

      if (instanceRef.value) {
        emit('create', instanceRef.value);
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
      toggle(force?: boolean) {
        return instanceRef.value ? instanceRef.value.toggle(force) : Promise.resolve();
      },
      update(options: Partial<VueLoadingOptions>) {
        if (instanceRef.value) {
          instanceRef.value.update(options);
        }
      },
      destroy() {
        destroyLoader();
      }
    });

    return () =>
      h(
        'div',
        {
          ...attrs,
          ref: hostRef
        },
        slots.default ? slots.default() : undefined
      );
  }
});
