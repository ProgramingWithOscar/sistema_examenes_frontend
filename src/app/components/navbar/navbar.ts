import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../services/loginService';
@Component({
  selector: 'app-navbar',
  imports: [MatIconModule,MatToolbarModule, RouterModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  isLoggedIn = false;
  isMenuOpen = false;

  constructor(public loginService: LoginService, private router: Router) {
    this.loginService.loginStatus$.subscribe(status => {
      this.isLoggedIn = status;
    });
  }

  public logout(): void {
    this.loginService.logout();
    this.router.navigate(["login"]);
  }
}