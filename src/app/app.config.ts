import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection
} from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations'; // 👈 Importa esto
import { provideToastr } from 'ngx-toastr';

import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { authInterceptorProviders } from './services/interceptors/interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    authInterceptorProviders,
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
    provideToastr({ // 👈 Aquí va tu config global
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      progressBar: true
    }),
    provideAnimations()
  ]
};
