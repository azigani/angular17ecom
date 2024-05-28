import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AjouterFormulaireComponent} from "./produits/ajouter-formulaire/ajouter-formulaire.component";
import {ModifierFormulaireComponent} from "./produits/modifier-formulaire/modifier-formulaire.component";
import {ListeComponent} from "./produits/liste/liste.component";
import {DefaultComponent} from "../../shared/shared/layouts/default/default.component";


const routes: Routes = [
  {
    path: '', component: DefaultComponent,
    children: [
      {path: '', component: AjouterFormulaireComponent},
      {path: 'ajouter', component: AjouterFormulaireComponent},
      {path: 'modifier', component: ModifierFormulaireComponent},
      {path: 'liste', component: ListeComponent},
    ]
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes),
  ]
})
export class ProduitsRoutingModule { }
