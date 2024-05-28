import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterModule, RouterOutlet} from "@angular/router";
import {AdminLoginComponent} from "../../../../admin/admin/admin-login/admin-login.component";
import {MatIconModule} from "@angular/material/icon";
import {SharedModule} from "../../../shared.module";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [AdminLoginComponent,RouterLink,RouterOutlet,RouterModule,MatIconModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
title: string = 'BIENVENU DANS L\'APPLICATION DE GESTION DES UTILISATEURS';
  onLogin() {
    console.log('Je navigue pour le login');

  }


}
