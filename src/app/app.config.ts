import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withHttpTransferCacheOptions } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(
    withHttpTransferCacheOptions({
      includePostRequests: true,
    }),
  ), provideHttpClient(withInterceptors([])), provideFirebaseApp(() => initializeApp(
    environment.firebaseConfig
  )), 
    provideAuth(() => getAuth()), 
    provideAnalytics(() => getAnalytics()
  ), ScreenTrackingService, UserTrackingService] // agregar interceptor
};
