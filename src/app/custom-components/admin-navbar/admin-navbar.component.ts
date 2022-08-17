import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {}

  onLogoClick(){
    this.router.navigate(['']);
  }

  onLogoutClick(){
    alert('Logged out!');
    localStorage.removeItem('adminToken');
    this.router.navigate(['']);
  }

}
