import {Component, inject} from '@angular/core';
import {RouterModule, RouterOutlet} from "@angular/router";
import {User} from "../../../model/user";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {UserService} from "../../../shared/service/user.service";
import {CommonModule} from "@angular/common";
import {DefaultComponent} from "../../../shared/shared/layouts/default/default.component";
import {MatError, MatInputModule, MatLabel} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-user-crud',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    DefaultComponent,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatError,
    MatLabel,
    CommonModule,
    MatInputModule,
    MatOptionModule
  ],
  templateUrl: './user-crud.component.html',
  styleUrl: './user-crud.component.css'
})
export class UserCrudComponent {

  userForm: FormGroup;
toaster =inject(ToastrService);
  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.userForm = this.formBuilder.group({
      utilisateurCourant: [''],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      username: ['', Validators.required],
      motDePasse: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      profileImageUrl: [''],
      // lastLoginDate: [''],
      // lastLoginDateDisplay: [''],
      // joinDate: [''],
      role: ['', Validators.required],
      // authorities: [''],
      isActive: [true],
      isNotLocked: [true]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const formData = this.userForm.value;
      this.userService.ajouterUtilisateur(formData)
        .subscribe(
          response => {
            // this.toaster.success("Utilisateur ajouté avec succès",response);
            this.toaster.success("Utilisateur ajouté avec succès");
            this.userForm.reset();
          },
          error => {
            // this.toaster.info("Erreur lors de l\'ajout de l\'utilisateur",error);
            this.toaster.error("Erreur lors de l\'ajout de l\'utilisateur",error);
          }
        );
    }
  }
}
