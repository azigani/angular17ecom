import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PayeurDashboardComponent} from "./payeur/payeur-dashboard/payeur-dashboard.component";
import {VendeurDashboardComponent} from "./vendeur/vendeur-dashboard/vendeur-dashboard.component";
import {PayeurPayementComponent} from "./payeur/payeur-payement/payeur-payement.component";
import {SiginSignupComponent} from "./sigin-signup/sigin-signup.component";
import {DefaultComponent} from "../shared/shared/layouts/default/default.component";

const routes: Routes = [
  {
    path: '', component: DefaultComponent,
    children: [
  { path: '', component: PayeurDashboardComponent },
  { path: 'client-vendeur', component: VendeurDashboardComponent },
  { path: 'payement-payeur', component: PayeurPayementComponent },
  { path: 'sign-in-signup', component: SiginSignupComponent },
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes),
  ],
exports : [RouterModule]

})
export class ClientsRoutingModule { }
