import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AdminDashboardComponent} from "./admin/admin-dashboard/admin-dashboard.component";
import {AdminLoginComponent} from "./admin/admin-login/admin-login.component";
import {UserCrudComponent} from "./admin/user-crud/user-crud.component";
import {DefaultComponent} from "../shared/shared/layouts/default/default.component";
import {SharedModule} from "../shared/shared.module";
import {AuthentificationGuard} from "../shared/shared/authentification.guard";

const routes: Routes = [
  {
    path: '', component: DefaultComponent,
    children: [
      // {path: '', component: AdminLoginComponent},
      {path: 'dashboard', component: AdminDashboardComponent,canActivate: [AuthentificationGuard] },
      // {path: 'admin-login', component: AdminLoginComponent},
      {path: 'crud-utilisateurs-admin', component: UserCrudComponent,canActivate: [AuthentificationGuard]},
    ]
  },
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    // ParametreRoutingModule,    ReactiveFormsModule,
    // FormsModule,
    CommonModule,RouterModule.forChild(routes),
  ],
exports : [RouterModule]

})
export class AdminRoutingModule { }
