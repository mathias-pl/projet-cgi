import { Component } from '@angular/core';
import { RouterLinkActive, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-inscription',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './inscription.component.html',
  styleUrl: '../app.component.css'
})
export class InscriptionComponent {

}
