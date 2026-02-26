import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { providePrimeNG } from 'primeng/config';

import CustomTheme from './theme/custom-theme';
import { registerLocaleData } from '@angular/common';
import vi from '@angular/common/locales/vi';
registerLocaleData(vi);
import { NZ_I18N, provideNzI18n, vi_VN } from 'ng-zorro-antd/i18n';
import { viCustom } from './theme/vi-custom';
import Aura from '@primeuix/themes/aura';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideNzI18n(viCustom), // dùng locale đã custom    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideAnimations(),
    provideRouter(routes),
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
  ],
};
