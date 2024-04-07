import { enableProdMode, importProvidersFrom } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { PreloadAllModules, provideRouter, RouteReuseStrategy, withPreloading } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app/app.component';
import { AppRoutes } from './app/app.routes';

import { environment } from './environments/environment';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './app/_helpers/interceptor';

if (environment.production) {
  enableProdMode();
}

const providers = [
  provideRouter(AppRoutes, withPreloading(PreloadAllModules)),
  { provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi : true},
  importProvidersFrom(
    IonicModule.forRoot({}),
    HttpClientModule,
    // BrowserModule
  )
];

bootstrapApplication(AppComponent, { providers });