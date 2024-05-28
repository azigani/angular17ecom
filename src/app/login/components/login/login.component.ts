import {Component, inject, Inject, OnDestroy, OnInit} from '@angular/core';
import {Router, RouterModule, RouterOutlet} from "@angular/router";
import {SharedModule} from "../../../shared/shared.module";
import {FooterComponent} from "../../../shared/shared/layouts/footer/footer.component";
import {MatCardModule} from "@angular/material/card";
import {MatError, MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatIconModule} from "@angular/material/icon";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {AuthentificationService} from "../../../shared/service/authentification.service";
import {ToastrService} from "ngx-toastr";
import {User} from "../../../model/user";
import {Subscription} from "rxjs";
import {map} from "rxjs/operators";
import {HeaderTypeEnum} from "../../../header-type.enum";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,
    RouterModule,
    // CommonModule,
    // ReactiveFormsModule,
    //  FormsModule,
    RouterOutlet,
    SharedModule,
    FooterComponent,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatError,
    MatCheckbox,
    MatToolbarModule,
    MatTooltipModule,
    MatIconModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements  OnInit, OnDestroy{
  // @Inject(FormBuilder)  fb!: FormBuilder;
  loginForm!: FormGroup;
  passwordVisible: any;

  http = inject(HttpClient);
  authservice = inject(AuthentificationService);
  routerService = inject(Router);
  toaster = inject(ToastrService);
  private subscription: Subscription[]= [];
  constructor(
    private fb: FormBuilder
  ) {

  }

  ngOnInit(): void {
    this.onInitForm();
    this.isUserConnecte();
  }

  isUserConnecte(){
    if (this.authservice.isLoggedIn()) {
      this. routerService.navigate(['/admin/crud-utilisateurs-admin']);
      this.toaster.error("Bienvenue connexion réussie".toUpperCase() + '  ');
    } else {
      this.routerService.navigate(['/login']);
    }

  }


  ngOnDestroy(): void {
    this.subscription.forEach((sub) => sub.unsubscribe());
  }

  onSubmit() {
    const user = this.loginForm?.value;
    console.log(user);

    this.subscription.push(
      this.authservice.connexion(user).pipe(
        map((response) => response as User) // Extract User data
      ).subscribe(
        (user: User) => {
          const token = this.authservice.getToken(HeaderTypeEnum.JWT_TOKEN);
          this.authservice.enregistrerToken(token);
          this.authservice.ajouterUtilisateurLocalCache(user);
          console.log(user);
          console.log(token);
          this.toaster.success('Connexion réussie !');
          this.routerService.navigate(['/admin/crud-utilisateurs-admin']);
        },
        (error) => {
          console.error(error?.message);
          this.toaster.error(error?.message?.toString() && 'Une erreure s\'est produite.');
        }
      )
    );
  }


  // onSubmit() {
  //   const user = this.loginForm?.value;
  //   console.log(user);
  //
  //   this.subscription.push(
  //     this.authservice.connexion(user).pipe(
  //       map((response: HttpResponse<User>) => {
  //         // Extract token from response headers
  //         const token = response.headers.get('Authorization');
  //         return response.body as User;
  //         if (token) {
  //           this.authservice.enregistrerToken(token.replace('Bearer ', ''));
  //         }
  //
  //         // Return the user data from the body
  //         return response.body as User;
  //       })
  //     ).subscribe(
  //       (user: User) => {
  //         this.authservice.ajouterUtilisateurLocalCache(user);
  //         this.toaster.success('Connexion réussie !');
  //         this.routerService.navigate(['/admin/crud-utilisateurs-admin']);
  //       },
  //       (error) => {
  //         console.error(error?.message);
  //         this.toaster.error(error?.message?.toString() && 'Une erreure s\'est produite.');
  //       }
  //     )
  //   );
  // }



  // onSubmit() {
  //   const user = this.loginForm.value;
  //   console.log(user);
  //
  //   this.subscription.push(
  //     this.authservice.connexion(user).pipe(
  //       map((response: HttpResponse<User>) => response.body) // Extract User data
  //     ).subscribe(
  //       (userData: User) => {
  //         const token = this.authservice.getToken(); // Use dedicated method
  //         this.authservice.enregistrerToken(token);
  //         this.authservice.ajouterUtilisateurLocalCache(userData);
  //         console.log(userData);
  //         console.log(token);
  //         this.toaster.success('Connexion réussie !');
  //         this.routerService.navigate(['/admin/crud-utilisateurs-admin']);
  //       },
  //       (error) => {
  //         console.error(error.message);
  //         this.toaster.error(error?.message?.toString().toUpperCase() || 'Une erreur s\'est produite.');
  //       }
  //     )
  //   );
  // }

  loginWithGoogle() {

  }

  togglePasswordVisibility() {

  }

  private onInitForm() {
    this.loginForm = this.fb?.group({
      username: ['', Validators.required],
      motDePasse: ['', Validators.required]
    });
  }
}
