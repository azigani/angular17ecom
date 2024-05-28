import {Component, ElementRef, ViewChild} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {FooterComponent} from "../../../shared/shared/layouts/footer/footer.component";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [RouterOutlet,FooterComponent, MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {


}
