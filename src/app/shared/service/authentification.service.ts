// import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
// import {inject, Injectable} from '@angular/core';
// import {Observable, BehaviorSubject} from 'rxjs';
// import {JwtHelperService} from '@auth0/angular-jwt';
// import {map, tap} from "rxjs/operators";
// import {configenvironnement} from "../../constantes/environnement";
// import {User} from "../../model/user";
// import {HeaderTypeEnum} from "../../header-type.enum";
//
// @Injectable({
//   providedIn: 'root',
// })
// export class AuthentificationService {
//   public urlg = configenvironnement.apiUrl;
//   private token: string | null = null;
//   private loggedInUsername: string = '';
//   private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
//   private jwtHelperService = new JwtHelperService();
//
//   private http = inject(HttpClient);
//    // private authentificationService = inject(AuthentificationService);
//
//   constructor() {
//     if (this.token)
//       this.loadToken();
//     const token = this.getToken(HeaderTypeEnum.JWT_TOKEN);
//     console.log(token
//     )
//   }
//
//
//   connexion(utilisateur: User): Observable<User> {
//     return this.http.post<User>(`${this.urlg}/user/connexion`, utilisateur, {
//       observe: 'response'
//     }
//     ).pipe(
//       map((response: HttpResponse<User>) => {
//         console.log(response.body);
//         console.log('utilisateur'+utilisateur);
//         if (response.status === 200) {
//           return response.body as User;
//         } else {
//
//           throw new HttpErrorResponse({
//             error: response.body,
//             status: response.status,
//             headers: response.headers,
//             statusText: response.statusText,
//             url: response.url || 'URL vide ou non valide'
//           });
//         }
//       })
//     );
//     console.log("utilisateur"+ utilisateur );
//   }
//
//   senregistrer(utilisateur: User): Observable<User> {
//     return this.http.post<User>(`${this.urlg}/user/senregistrer`, utilisateur, {
//       observe: 'response',
//     }).pipe(
//       map((response: HttpResponse<User>) => {
//         if (response?.status === 200) {
//           return response?.body as User;
//         } else {
//           // Handle error, e.g., throw an error
//           // throw new HttpErrorResponse(response);
//
//           throw new HttpErrorResponse({
//             error: response?.body || 'Request failed', // Provide a fallback error message
//             status: response?.status,
//             headers: response?.headers,
//             statusText: response?.statusText,
//             url: response.url || '' // Use an empty string if url is null
//           });
//         }
//       })
//     );
//   }
//
//   /**
//    * Déconnexion de l'utilisateur
//    */
//   deconnexion(): void {
//     this.token = null;
//     this.loggedInUsername = '';
//     localStorage.removeItem('user');
//     localStorage.removeItem('token');
//     localStorage.removeItem('users');
//     this.isAuthenticatedSubject.next(false);
//   }
//
//   /**
//    * Enregistrer le token dans le stockage local
//    * @param token Token d'authentification (peut être null)
//    */
//   enregistrerToken(token: string | null): void {
//     if (token) {
//       localStorage.setItem('token', token);
//     }
//     this.isAuthenticatedSubject.next(true);
//   }
//
//   /**
//    * Sauvegarder les détails de l'utilisateur dans le stockage local
//    * @param user Objet utilisateur à stocker
//    */
//   ajouterUtilisateurLocalCache(user: User): void {
//     localStorage.setItem('user', JSON.stringify(user));
//   }
//
//   /**
//    * Récupérer les détails de l'utilisateur du stockage local
//    * @returns User | null Objet utilisateur ou null si introuvable
//    */
//   getUtilisateurFromLocalCache(): User | null {
//     const userString = localStorage.getItem('user');
//     return userString ? JSON.parse(userString) : null;
//   }
//
//   /**
//    * Charger le token du stockage local
//    */
//   loadToken(): void {
//     if (this.token)
//       this.token = localStorage.getItem('token');
//   }
//
//   /**
//    * Obtenir le token enregistré
//    * @returns string | null Token d'authentification ou null
//    */
//   getToken(JWT_TOKEN: HeaderTypeEnum.JWT_TOKEN): string | null {
//     if (this.token)
//       return this.token;
//     else {
//       return null;
//     }
//   }
//
//   /**
//    * Vérifier si un utilisateur est connecté
//    * @returns boolean Vrai si l'utilisateur est connecté, faux sinon
//    */
//   isLoggedIn(): boolean {
//     this.loadToken();
//     return this.token !== null && !this.jwtHelperService.isTokenExpired(this.token);
//   }
// }


import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, tap } from 'rxjs/operators';
import { configenvironnement } from '../../constantes/environnement';
import { User } from '../../model/user';
import { HeaderTypeEnum } from '../../header-type.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  public urlg = configenvironnement.apiUrl;
  private token: string | null = null;
  private loggedInUsername: string = '';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private jwtHelperService = new JwtHelperService();

  private http = inject(HttpClient);

  constructor() {
    this.loadToken(); // Load token from local storage on initialization
  }

  connexion(utilisateur: User): Observable<User> {
    return this.http.post<User>(`${this.urlg}/user/connexion`, utilisateur, {
      observe: 'response'
    })
      .pipe(
        map((response: HttpResponse<User>) => {
          if (response.status === 200) {
            const token = response.headers.get('Authorization'); // Extract token from response header
            if (token) {
              this.enregistrerToken(token.replace(`Bearer `+token, '')); // Save extracted token (remove 'Bearer ')
            }
            return response.body as User;
          } else {
            throw new HttpErrorResponse({
              error: response.body,
              status: response.status,
              headers: response.headers,
              statusText: response.statusText,
              url: response.url || 'URL vide ou non valide'
            });
          }
        }),
        tap(() => this.isAuthenticatedSubject.next(true)) // Update authentication state
      );
  }

  // connexion(utilisateur: User): Observable<User> {
  //   return this.http.post<User>(`${this.urlg}/user/connexion`, utilisateur, {
  //     observe: 'response'
  //   })
  //     .pipe(
  //       map((response: HttpResponse<User>) => {
  //         if (response.status === 200) {
  //           const token = response.headers.get('Authorization'); // Extract token from response header
  //           if (token) {
  //             this.enregistrerToken(token.replace(`Bearer `+token, '')); // Save extracted token (remove 'Bearer ')
  //           }
  //           return response.body as User;
  //         } else {
  //           throw new HttpErrorResponse({
  //             error: response.body,
  //             status: response.status,
  //             headers: response.headers,
  //             statusText: response.statusText,
  //             url: response.url || 'URL vide ou non valide'
  //           });
  //         }
  //       }),
  //       tap(() => this.isAuthenticatedSubject.next(true)) // Update authentication state
  //     );
  // }

  senregistrer(utilisateur: User): Observable<User> {
    return this.http.post<User>(`${this.urlg}/user/senregistrer`, utilisateur, {
      observe: 'response'
    })
      .pipe(
        map((response: HttpResponse<User>) => {
          if (response.status === 200) {
            const token = response.headers.get('Authorization'); // Extract token from response header
            if (token) {
              this.enregistrerToken(token.replace('Bearer ', '')); // Save extracted token (remove 'Bearer ')
            }
            return response.body as User;
          } else {
            throw new HttpErrorResponse({
              error: response.body || 'Request failed',
              status: response.status,
              headers: response.headers,
              statusText: response.statusText,
              url: response.url || ''
            });
          }
        }),
        tap(() => this.isAuthenticatedSubject.next(true)) // Update authentication state
      );
  }

  deconnexion(): void {
    this.token = null;
    this.loggedInUsername = '';
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.isAuthenticatedSubject.next(false);
  }

  enregistrerToken(token: string | null): void {
    if (token) {
      localStorage.setItem('token', token);
    }
  }

  ajouterUtilisateurLocalCache(user: User | null): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUtilisateurFromLocalCache(): User | null {
    const userString = localStorage.getItem('user');
    return userString ? JSON.parse(userString) : null;
  }

  loadToken(): void {
    this.token = localStorage.getItem('token');
  }

  getToken(JWT_TOKEN: HeaderTypeEnum.JWT_TOKEN): string | null {
    return JWT_TOKEN;
  }

  isLoggedIn(): boolean {
    this.loadToken();
    return this.token !== null && !this.jwtHelperService.isTokenExpired(this.token);
  }
}







//
// import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
// import {inject, Injectable} from '@angular/core';
// import { Observable, BehaviorSubject } from 'rxjs';
// import { JwtHelperService } from '@auth0/angular-jwt';
// import { map, tap } from 'rxjs/operators';
// import { configenvironnement } from '../../constantes/environnement';
// import { User } from '../../model/user';
// import { HeaderTypeEnum } from '../../header-type.enum';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthentificationService {
//   public urlg = configenvironnement.apiUrl;
//   private token: string | null = null;
//   private loggedInUsername: string = '';
//   private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
//   private jwtHelperService = new JwtHelperService();
//   // private http: HttpClient = new HttpClient();
//
//   private http = inject(HttpClient);
// //    // private authentificationService = inject(AuthentificationService);
// //
//   constructor() {
//     this.loadToken(); // Load token from local storage on initialization
//   }
//
//   connexion(utilisateur: User): Observable<User> {
//     return this.http.post<User>(`${this.urlg}/user/connexion`, utilisateur, {
//       observe: 'response'
//     })
//       .pipe(
//         map((response: HttpResponse<User>) => {
//           if (response.status === 200) {
//             const token = response.headers.get('Authorization'); // Extract token from response header
//             if (token) {
//               this.enregistrerToken(token.replace('Bearer ', '')); // Save extracted token (remove 'Bearer ')
//             }
//             return response.body as User;
//           } else {
//             throw new HttpErrorResponse({
//               error: response.body,
//               status: response.status,
//               headers: response.headers,
//               statusText: response.statusText,
//               url: response.url || 'URL vide ou non valide'
//             });
//           }
//         }),
//         tap(() => this.isAuthenticatedSubject.next(true)) // Update authentication state
//       );
//   }
//
//   senregistrer(utilisateur: User): Observable<User> {
//     return this.http.post<User>(`${this.urlg}/user/senregistrer`, utilisateur, {
//       observe: 'response'
//     })
//       .pipe(
//         map((response: HttpResponse<User>) => {
//           if (response.status === 200) {
//             const token = response.headers.get('Authorization'); // Extract token from response header
//             if (token) {
//               this.enregistrerToken(token.replace('Bearer ', '')); // Save extracted token (remove 'Bearer ')
//             }
//             return response.body as User;
//           } else {
//             throw new HttpErrorResponse({
//               error: response.body || 'Request failed',
//               status: response.status,
//               headers: response.headers,
//               statusText: response.statusText,
//               url: response.url || ''
//             });
//           }
//         }),
//         tap(() => this.isAuthenticatedSubject.next(true)) // Update authentication state
//       );
//   }
//
//   deconnexion(): void {
//     this.token = null;
//     this.loggedInUsername = '';
//     localStorage.removeItem('user');
//     localStorage.removeItem('token');
//     this.isAuthenticatedSubject.next(false);
//   }
//
//   enregistrerToken(token: string | null): void {
//     if (token) {
//       localStorage.setItem('token', token);
//     }
//   }
//
//   ajouterUtilisateurLocalCache(user: User | null): void {
//     localStorage.setItem('user', JSON.stringify(user));
//   }
//
//   getUtilisateurFromLocalCache(): User | null {
//     const userString = localStorage.getItem('user');
//     return userString ? JSON.parse(userString) : null;
//   }
//
//   loadToken(): void {
//     this.token = localStorage.getItem('token');
//   }
//
//   getToken(JWT_TOKEN: HeaderTypeEnum.JWT_TOKEN): string | null {
//     return JWT_TOKEN;
//   }
//
//   isLoggedIn(): boolean {
//     this.loadToken();
//     return this.token !== null && !this.jwtHelperService.isTokenExpired(this.token);
//   }
// }
