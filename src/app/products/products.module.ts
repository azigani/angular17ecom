import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProduitsRoutingModule} from "./components/produits-routing.module";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProduitsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
