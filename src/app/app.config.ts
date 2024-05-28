import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {authInterceptor} from "./intercepteur/auth.interceptor";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {AuthentificationGuard} from "./shared/shared/authentification.guard";
import {provideToastr} from "ngx-toastr";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideAnimationsAsync(),
    provideToastr({
      timeOut: 100000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    closeButton:true,
    }),


  ]

};
