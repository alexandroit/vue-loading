import { ReviveLoading } from './Loading';
import { reviveLoadingDirective } from './directive';
import type { VueLoadingPlugin } from './types';

export const VueLoading: VueLoadingPlugin = {
  install(app) {
    app.component('revive-loading', ReviveLoading);
    app.component('ReviveLoading', ReviveLoading);
    app.directive('revive-loading', reviveLoadingDirective);
  }
};

export default VueLoading;
