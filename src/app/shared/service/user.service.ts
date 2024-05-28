import {HttpClient, HttpErrorResponse, HttpEvent, HttpResponse} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {configenvironnement} from "../../constantes/environnement";
import {User} from "../../model/user";
import {CustomHttpResponse} from "../../model/custom-http-response";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = configenvironnement.apiUrl;

  private http = inject(HttpClient);

  constructor() {

  }

  getUsers(): Observable<User[] | HttpErrorResponse> {
    return this.http.get<User[]>(`${this.url}/user/liste-de-tous-les-utilisateurs`);
  }


  ajouterUtilisateur(formData: FormData): Observable<User | HttpErrorResponse> {
    return this.http.post<User>(`${this.url}/user/ajouter-nouvel-utilisateur`, formData);
  }


  modifierUtilisateur(formData: FormData): Observable<User | HttpErrorResponse> {
    return this.http.post<User>(`${this.url}/user/modifier-utilisateur`, formData);
  }

  resetPassword(email: string): Observable<CustomHttpResponse | HttpErrorResponse> {
    return this.http.get<CustomHttpResponse>(`${this.url}/user/modifier-mot-de-passe/${email}`);
  }


  updateProfileImage(formData: FormData): Observable<HttpEvent<User> | HttpErrorResponse> {
    return this.http.post<User>(`${this.url}/user/mettre-a-jour-profile-image`, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

  supprimerUtilisateur(userId: number): Observable<CustomHttpResponse | HttpErrorResponse> {
    return this.http.delete<CustomHttpResponse>(`${this.url}/supprimer-utilisateur/${userId}`);
  }


  ajouterUtilisateurAuLocalcache(users: User[]): void {
    return localStorage.setItem('users', JSON.stringify(users));
  }

  // getUtilisateursDuLocalcache(): User[] {
  //
  //   if (localStorage?.getItem('users')) {
  //     return JSON.parse(localStorage.getItem('users'));
  //   }
  //   return [];
  // }



  getUtilisateursDuLocalcache(): User[] {
    const usersData = localStorage.getItem('users');
    if (usersData !== null) {
      return JSON.parse(usersData);
    } else {
      // Gérer le cas où localStorage.getItem('users') retourne null
      // Par exemple, renvoyer une valeur par défaut ou lever une erreur
      return []; // Ou bien, renvoyer une liste vide
    }
  }
  creerUserFormData(loggedInUsername:string, user:User,profileImage: File): FormData {
    const formData = new FormData();
    formData.append('utilisateurCourant', loggedInUsername);
    formData.append('nom', user.nom);
    formData.append('prenom', user.prenom);
    formData.append('username', user.username);
    formData.append('motDePasse', user.motDePasse);
    formData.append('email', user.email);
    if (user?.profileImageUrl){
      formData.append('profileImageUrl', user.profileImageUrl);
    }
    // if (user?.lastLoginDate){
    //   formData.append('lastLoginDate', user.lastLoginDate);
    // } if (user?.lastLoginDateDisplay){
    //   formData.append('lastLoginDateDisplay', user.lastLoginDateDisplay);
    // } if (user?.joinDate){
    //   formData.append('joinDate', user.joinDate);
    // }

    // formData.append('lastLoginDate', user.lastLoginDate);
    // formData.append('lastLoginDateDisplay', user.lastLoginDateDisplay);
    // formData.append('joinDate', user.joinDate);
    formData.append('role', user.role);

    // formData.append('authorities', user.authorities);
    formData.append('isActive',JSON.stringify(user.isActive));
    formData.append('isNotLocked', JSON.stringify(user.isNotLocked));
    return formData;
  }

  senregistrer(formData: FormData): Observable<User | HttpErrorResponse> {
    return this.http.post<User>(`${this.url}/user/ajouter-nouvel-utilisateur`, formData);
  }


}
