import type { Directive, Plugin } from 'vue-demi';
import type {
  LoaderInstance,
  LoaderOptions,
  LoaderTarget
} from '@stackline/loading-core';

export type VueLoadingOptions = LoaderOptions;

export interface VueLoadingDirectiveValue {
  visible?: boolean;
  options?: VueLoadingOptions;
}

export interface LoadingController {
  create(target?: LoaderTarget, options?: VueLoadingOptions): LoaderInstance;
  mount(target?: LoaderTarget, options?: VueLoadingOptions): LoaderInstance;
  show(target?: LoaderTarget, options?: VueLoadingOptions): Promise<LoaderInstance>;
  hide(): Promise<void>;
  toggle(force?: boolean): Promise<void>;
  update(options: Partial<VueLoadingOptions>): LoaderInstance | null;
  destroy(): void;
  getInstance(): LoaderInstance | null;
}

export type VueLoadingPlugin = Plugin & {
  install(app: {
    component: (name: string, component: unknown) => void;
    directive: (name: string, directive: Directive) => void;
  }): void;
};
