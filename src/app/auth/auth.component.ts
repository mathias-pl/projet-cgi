import { Component } from '@angular/core';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  imports: [RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['../app.component.css'] // Corrected from styleUrl to styleUrls
})
export class AuthComponent {
  email: string = '';
  password: string = '';

  onLogin(email: string, password: string): void {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://reqres.in/api/login', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    const data = JSON.stringify({
      email: email,
      password: password
    });
    xhr.send(data);
    xhr.onload = function() {
      alert(xhr.responseText);
    }
  }
}
