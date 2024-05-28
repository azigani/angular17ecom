import {Component, inject} from '@angular/core';
import {MenuComponent} from "../menu/menu.component";
import {HeaderComponent} from "../header/header.component";
import {RouterModule, RouterOutlet} from "@angular/router";
import {FooterComponent} from "../footer/footer.component";
import {MatDrawerContainer, MatDrawerContent} from "@angular/material/sidenav";

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [RouterModule,
    HeaderComponent,
    FooterComponent,
    MatDrawerContainer,
    MatDrawerContent],
  templateUrl: './default.component.html',
  styleUrl: './default.component.css'
})
export class DefaultComponent {
  isLoggged: boolean = false;

  isLoggedIn() {

  }
}
