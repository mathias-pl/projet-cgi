import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


  
@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['../app.component.css']
})
export class GestionComponent implements OnInit {
  token: string | null = '';
  users: any[] = [];
  pages: number[] = [1, 2];
  page = 1;
  email: string = '';

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.fetchUsers(false);
  }

  onLogout(): void {
    localStorage.removeItem('token');
    window.location.href = '/auth';
  }

  fetchUsers(clear: boolean): void {
    if (clear) {
      this.users = [];
    }

    this.pages.forEach(pageNumber => {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', `https://reqres.in/api/users?page=${pageNumber}`, true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send();
      xhr.onload = () => {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          this.users = this.users.concat(response.data);
          console.log(this.users);
        }
      };
    });
  }

  onEdit(id: number): void {
    window.location.href = `/details/${id}`;
  }

  onAdd(email: String) {
    const newUser = {
      id: this.users.length + 1,
      email: email,
      first_name: 'John',
      last_name: 'Doe',
      avatar: 'https://reqres.in/img/faces/1-image.jpg'
    };
    this.users.push(newUser);
  }
}