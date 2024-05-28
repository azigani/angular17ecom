import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AddItemComponent} from "./components/cart/add-item/add-item.component";
import {EditItemComponent} from "./components/cart/edit-item/edit-item.component";
import {ListeComponent} from "../products/components/produits/liste/liste.component";
import {DefaultComponent} from "../shared/shared/layouts/default/default.component";


const routes: Routes = [
  {
    path: '', component: DefaultComponent,
    children: [
      {path: '', component: AddItemComponent},
      {path: 'ajouter', component: AddItemComponent},
      {path: 'modifier', component: EditItemComponent},
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
export class CartRoutingModule { }
