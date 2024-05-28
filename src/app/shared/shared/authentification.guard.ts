// import {CanActivateFn} from '@angular/router';
// import {inject} from "@angular/core";
// import {AuthentificationService} from "../service/authentification.service";
//
// export const AuthentificationGuard: CanActivateFn = (route, state) => {
//   const authservice = inject(AuthentificationService);
//   return authservice.isLoggedIn();
//
//   if (authservice.isLoggedIn()) {
//     return true;
//   }
//   this.route(['/admin/admin-login']);
//   return false;
// };
//
import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthentificationService} from "../service/authentification.service";
import {ToastrService} from "ngx-toastr";

export const AuthentificationGuard: (router: Router) => (boolean | boolean) = (router: Router) => {
  const authservice = inject(AuthentificationService);
  let routerService = inject(Router);
  const toaster = inject(ToastrService);
  if (!authservice.isLoggedIn()) {
    routerService.navigate(['/admin/admin-login']); // Use router.navigate for redirection
    toaster.error("Une connexion est requise pour accéder à cette page".toUpperCase());
    return false;
  }
  return authservice.isLoggedIn();
};
