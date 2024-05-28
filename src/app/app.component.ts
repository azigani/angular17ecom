import { Component } from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {AdminLoginComponent} from "./admin/admin/admin-login/admin-login.component";
import {SharedModule} from "./shared/shared.module";
import {MenuComponent} from "./shared/shared/layouts/menu/menu.component";
import {DefaultComponent} from "./shared/shared/layouts/default/default.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule,RouterOutlet,
    AdminLoginComponent,
    MenuComponent,
    // DefaultComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular17ecom';
}
