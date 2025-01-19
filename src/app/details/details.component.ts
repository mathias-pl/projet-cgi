import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  imports: [CommonModule, FormsModule],
  templateUrl: './details.component.html',
  styleUrl: '../app.component.css'
})
export class DetailsComponent {
  token: string | null = '';
  user: any = {};

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.onRetrieve();
  }

  onLogout(): void {
    localStorage.removeItem('token');
    window.location.href = '/auth';
  }

  onManage(): void {
    window.location.href = '/gestion';
  }

  onRetrieve(): void {
    const id = window.location.pathname.split('/').pop();
    var xhr = new XMLHttpRequest();
    xhr.open('GET', `https://reqres.in/api/users/${id}`, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();
    xhr.onload = () => {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        this.user = response.data;
      }
    };
  }
}
