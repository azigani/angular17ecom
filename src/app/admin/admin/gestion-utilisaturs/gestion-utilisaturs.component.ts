import { Component } from '@angular/core';
import {UserCrudComponent} from "../user-crud/user-crud.component";

@Component({
  selector: 'app-gestion-utilisaturs',
  standalone: true,
  imports: [UserCrudComponent],
  templateUrl: './gestion-utilisaturs.component.html',
  styleUrl: './gestion-utilisaturs.component.css'
})
export class GestionUtilisatursComponent {

}
