import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

// Configuration globale de l'application
export const appConfig: ApplicationConfig = {
  // fournisseurs
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};
