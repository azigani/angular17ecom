import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {DefaultComponent} from "./shared/layouts/default/default.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatError, MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";



@NgModule({
  declarations: [],
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
    MatOptionModule,
    FormsModule
  ],
  exports :[
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    CommonModule,
    MatError,
    MatLabel,
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
    MatOptionModule,

  ]
})
export class SharedModule { }
