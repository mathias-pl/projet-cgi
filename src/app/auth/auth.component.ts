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

  validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  onLogin(email: string, password: string): void {
    if (!this.validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://reqres.in/api/login', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    const data = JSON.stringify({
      email: email,
      password: password
    });
    xhr.send(data);
    xhr.onload = function() {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        localStorage.setItem('token', response.token);
        window.location.href = '/gestion';
      } else {
        alert('Login failed. Please check your credentials and try again.');
      }
    }
  }
}
