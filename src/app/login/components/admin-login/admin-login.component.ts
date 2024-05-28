import {Component, ElementRef, Inject, inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Router, RouterModule, RouterOutlet} from "@angular/router";
import {FooterComponent} from "../../../shared/shared/layouts/footer/footer.component";
import {MatCardModule} from "@angular/material/card";
import {MatError, MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {AuthentificationService} from "../../../shared/service/authentification.service";
import {ToastrService} from "ngx-toastr";
import {User} from "../../../model/user";
import {MatCheckbox} from "@angular/material/checkbox";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTooltipModule} from "@angular/material/tooltip";
import {CommonModule} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {SharedModule} from "../../../shared/shared.module";

@Component({
  selector: 'app-admin-login',
  standalone: true,
  // imports: [ReactiveFormsModule, RouterOutlet, FooterComponent, MatCardModule,
  //   MatFormFieldModule,
  //   MatInputModule,
  //   MatButtonModule,
  //   MatError,
  //   MatCheckbox,
  // MatToolbarModule,
  //   MatTooltipModule
  // ],

  imports: [RouterModule,
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
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent implements OnInit, OnDestroy {
  // loginForm!: FormGroup;
  @Inject(FormBuilder)  fb!: FormBuilder;
  loginForm!: FormGroup;
  passwordVisible: any;

 http = inject(HttpClient);
  authservice = inject(AuthentificationService);
   routerService = inject(Router);
   toaster = inject(ToastrService);
  constructor(

  ) {
    this.loginForm = this.fb?.group({
      username: ['', Validators.required],
      motDePasse: ['', Validators.required]
    });
  }

  ngOnInit(): void {
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

  onLogin(user: User): void {


  }

  ngOnDestroy(): void {

  }

  onSubmit() {
    const user = this.loginForm.value;
    if (this.loginForm.valid) {
      this.http.post('/login', user).subscribe({
        next: (response: any) => {
          // Redirection vers la page d'accueil après une connexion réussie
          this.toaster.success("Bienvenue connexion réussie".toUpperCase() + '  ');
          this.routerService.navigate(['/admin/crud-utilisateurs-admin']);
        },
        error: (error: any) => {
          this.toaster.error(error.message);
        }
      });
    }else {
      this.toaster.error("Le formulaire n'est pas valide ".toUpperCase() + '  ')
    }

  }

  loginWithGoogle() {

  }

  togglePasswordVisibility() {

  }
}
