import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  isLoggedIn = false;

  constructor(private router: Router) { }

  isAuth() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLoggedIn);
      }, 1000);
    });
  }

  logIn () {
    this.isLoggedIn = true;
  }

  logOut () {
    this.isLoggedIn = false;
    this.router.navigateByUrl('');
  }

  getLoggedIn() {
    return this.isLoggedIn;
  }
}
