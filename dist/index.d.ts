import * as _revivejs_loading from '@revivejs/loading';
import { LoaderTarget, LoaderOptions, LoaderInstance } from '@revivejs/loading';
export { LoaderAriaLive, LoaderCategory, LoaderDirection, LoaderInstance, LoaderOptions, LoaderState, LoaderTarget, LoaderThemeTokens, LoaderVariant, ResolvedLoaderOptions, StyleObject, VariantDefinition, applyThemeTokens, createLoader, darkTheme, defaultLoaderOptions, getLoaderStyles, getVariantDefinition, getVariantStyles, hideLoader, hydrateLoaders, lightTheme, loaderVariants, mountLoader, showLoader } from '@revivejs/loading';
import * as vue from 'vue';
import { Plugin, Directive, PropType, DirectiveBinding } from 'vue-demi';

type VueLoadingOptions = LoaderOptions;
interface VueLoadingDirectiveValue {
    visible?: boolean;
    options?: VueLoadingOptions;
}
interface LoadingController {
    create(target?: LoaderTarget, options?: VueLoadingOptions): LoaderInstance;
    mount(target?: LoaderTarget, options?: VueLoadingOptions): LoaderInstance;
    show(target?: LoaderTarget, options?: VueLoadingOptions): Promise<LoaderInstance>;
    hide(): Promise<void>;
    toggle(force?: boolean): Promise<void>;
    update(options: Partial<VueLoadingOptions>): LoaderInstance | null;
    destroy(): void;
    getInstance(): LoaderInstance | null;
}
type VueLoadingPlugin = Plugin & {
    install(app: {
        component: (name: string, component: unknown) => void;
        directive: (name: string, directive: Directive) => void;
    }): void;
};

declare const ReviveLoading: vue.DefineComponent<vue.ExtractPropTypes<{
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    options: {
        type: PropType<VueLoadingOptions>;
        default: () => {};
    };
}>, () => vue.VNode<vue.RendererNode, vue.RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, vue.ComponentOptionsMixin, vue.ComponentOptionsMixin, ("create" | "shown" | "hidden" | "updated" | "destroyed")[], "create" | "shown" | "hidden" | "updated" | "destroyed", vue.PublicProps, Readonly<vue.ExtractPropTypes<{
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    options: {
        type: PropType<VueLoadingOptions>;
        default: () => {};
    };
}>> & Readonly<{
    onCreate?: ((...args: any[]) => any) | undefined;
    onShown?: ((...args: any[]) => any) | undefined;
    onHidden?: ((...args: any[]) => any) | undefined;
    onUpdated?: ((...args: any[]) => any) | undefined;
    onDestroyed?: ((...args: any[]) => any) | undefined;
}>, {
    visible: boolean;
    options: _revivejs_loading.LoaderOptions;
}, {}, {}, {}, string, vue.ComponentProvideOptions, true, {}, any>;

type LoadingDirectiveBinding = DirectiveBinding<VueLoadingDirectiveValue | VueLoadingOptions | boolean>;
type LegacyDirectiveHooks = {
    bind?: (element: HTMLElement, binding: LoadingDirectiveBinding) => void;
    inserted?: (element: HTMLElement, binding: LoadingDirectiveBinding) => void;
    update?: (element: HTMLElement, binding: LoadingDirectiveBinding) => void;
    unbind?: (element: HTMLElement) => void;
};
declare const reviveLoadingDirective: Directive & LegacyDirectiveHooks;

declare function createLoadingController(defaultOptions?: VueLoadingOptions): LoadingController;
declare function useLoading(defaultOptions?: VueLoadingOptions): LoadingController;

declare const VueLoading: VueLoadingPlugin;

export { type LoadingController, ReviveLoading, VueLoading, type VueLoadingDirectiveValue, type VueLoadingOptions, type VueLoadingPlugin, createLoadingController, VueLoading as default, reviveLoadingDirective, useLoading };
