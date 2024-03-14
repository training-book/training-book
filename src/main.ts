import { enableProdMode, importProvidersFrom } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { PreloadAllModules, provideRouter, RouteReuseStrategy, withPreloading } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app/app.component';
import { AppRoutes } from './app/app.routes';

import { environment } from './environments/environment';
import { HttpClientModule } from '@angular/common/http';

if (environment.production) {
  enableProdMode();
}

const providers = [
  provideRouter(AppRoutes, withPreloading(PreloadAllModules)),
  { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  importProvidersFrom(
    IonicModule.forRoot({}),
    HttpClientModule,
    // BrowserModule
  )
];

bootstrapApplication(AppComponent, { providers });