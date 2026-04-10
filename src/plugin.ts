import { StacklineLoading } from './Loading';
import { stacklineLoadingDirective } from './directive';
import type { VueLoadingPlugin } from './types';

export const VueLoading: VueLoadingPlugin = {
  install(app) {
    app.component('stackline-loading', StacklineLoading);
    app.component('StacklineLoading', StacklineLoading);
    app.directive('stackline-loading', stacklineLoadingDirective);
  }
};

export default VueLoading;
