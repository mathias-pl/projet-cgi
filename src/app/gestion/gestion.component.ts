import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion',
  imports: [],
  templateUrl: './gestion.component.html',
  styleUrl: '../app.component.css'
})

export class GestionComponent implements OnInit {
  token: string | null = '';

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
  }

  onLogout(): void {
    localStorage.removeItem('token');
    window.location.href = '/auth';
  }
}