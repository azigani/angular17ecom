import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./components/login/login.component";
import {SharedModule} from "../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AdminLoginComponent} from "./components/admin-login/admin-login.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: 'login'}
];
@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
     AdminLoginComponent,
    // SharedModule,

    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    // ReactiveFormsModule,
    // FormsModule,
  ]
})
export class LoginModule { }
