import {HttpInterceptorFn} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import {AuthentificationService} from "../shared/service/authentification.service";
import {HeaderTypeEnum} from "../header-type.enum";

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const authService = inject(AuthentificationService);

  const baseUrl = authService.urlg; // Store base URL

  if (
    req.url.includes(`${baseUrl}/user/connexion`) ||
    req.url.includes(`${baseUrl}/user/senregistrer`) ||
    req.url.includes(`${baseUrl}/user/modifier-mot-de-passe`)
  ) {
    return next(req);
  }


  authService.loadToken();
  // Load token
  const token = authService.getToken(HeaderTypeEnum.JWT_TOKEN);
  authService.loadToken();
  // const loadToken = inject(AuthentificationService).loadToken();
  // const token = inject(AuthentificationService).getToken();
  // console.log(loadToken)
  if (token) {
    console.log("Je rentre si le token exitse" + " "+ token)
    const request = req.clone({
      setHeaders: {Authorization: `Bearer ${token}`},
    });
    return next(request);
  } else {
    // Handle error, e.g., log or redirect to login
    console.error("Failed to retrieve token for authorization");
    return next(req); // Continue without authorization for now
  }

}
