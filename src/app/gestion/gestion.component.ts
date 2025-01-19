import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


  
@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  imports: [CommonModule],
  styleUrls: ['../app.component.css']
})
export class GestionComponent implements OnInit {
  token: string | null = '';
  users: any[] = [];
  pages: number[] = [1, 2];
  page = 1;

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.fetchUsers();
  }

  onLogout(): void {
    localStorage.removeItem('token');
    window.location.href = '/auth';
  }

  fetchUsers(): void {
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
      } else {
        alert(`Failed to get users for page ${pageNumber}.`);
      }
      };
    });
  }

  onEdit(id: number): void {
    window.location.href = `/details/${id}`;
  }
}