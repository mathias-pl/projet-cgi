import { Component } from '@angular/core';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  imports: [RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './inscription.component.html',
  styleUrl: '../app.component.css'
})
export class InscriptionComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  validatePassword(password: string): boolean {
    const hasLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    return hasLength && hasUpperCase && hasLowerCase && hasNumber;
  }

  onRegister(email: string, password: string, confirmPassword: string): void {
    if (!this.validateEmail(email)) {
      alert('Veuillez entrer une adresse email valide.');
      return;
    }

    if (!this.validatePassword(password)) {
      alert('Veuillez entrer un mot de passe valide.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Les mots de passe ne correspondent pas');
      return;
    }

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://reqres.in/api/register', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    const data = JSON.stringify({
      email: email,
      password: password
    });
    xhr.send(data);
    xhr.onload = function () {
      // This will never work, as the only credentials that work are:
      // email: eva.holt@reqres.in
      // password: pistol
      // However, the password is not valid for our app!
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        localStorage.setItem('token', response.token);
        window.location.href = '/gestion';
      } else {
        alert('Inscription échouée. Veuillez vérifier vos informations et réessayer.');
      }
    }
  }
}
