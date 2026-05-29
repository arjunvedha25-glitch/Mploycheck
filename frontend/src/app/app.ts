import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { AppRoutingModule } from './app.routing.module'; 
import { provideHttpClient } from '@angular/common/http'; // 👈 1. Add this import

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(AppRoutingModule), // Hooks up your routes
    provideHttpClient()                     // 👈 2. Add this here
  ]
};