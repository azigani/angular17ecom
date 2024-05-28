import { Component } from '@angular/core';
import {MenuComponent} from "../menu/menu.component";
import {MatToolbarModule, MatToolbarRow} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule, MatMenuTrigger} from "@angular/material/menu";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuComponent,MatToolbarModule,MatToolbarRow,
  MatIconModule,
    MatMenuTrigger,
  MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
