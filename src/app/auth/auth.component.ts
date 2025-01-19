import { Component } from '@angular/core';
import { RouterLinkActive, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './auth.component.html',
  styleUrls: ['../app.component.css'] // Corrected from styleUrl to styleUrls
})
export class AuthComponent {
  // Add your new method here
  ngOnInit() {
    document.getElementById('loginButton')?.addEventListener('click', this.onLogin.bind(this));
  }

  onLogin() {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://reqres.in/api/login', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    const data = JSON.stringify({
      email: "eve.holt@reqres.in",
      password: "cityslicka"
    });
    xhr.send(data);
    xhr.onload = function() {
      alert(xhr.responseText);
    }
  }
}
