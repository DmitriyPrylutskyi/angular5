import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showLoginAlert = false;
  showLogoutAlert = false;
  showMustLoginAlert: boolean;

  constructor(private auth: AuthService) {}

  ngOnInit () {

  }

  checkLogin() {
    this.showMustLoginAlert = !this.auth.getLoggedIn();
    this.closeTimerAlert();
  }

  changeAuthStatus(status: string) {
    if (status === 'login') {
      if (!this.auth.getLoggedIn()) {
        this.showLogoutAlert = false;
        this.showMustLoginAlert = false;
        this.showLoginAlert = true;
        this.closeTimerAlert();
      }
      this.auth.logIn();
    } else {
      if (this.auth.getLoggedIn()) {
        this.showLoginAlert = false;
        this.showMustLoginAlert = false;
        this.showLogoutAlert = true;
        this.closeTimerAlert();
      }
      this.auth.logOut();
    }
  }

  closeTimerAlert() {
    setTimeout(() => {
      this.showLoginAlert = false;
      this.showLogoutAlert = false;
      this.showMustLoginAlert = false;
    }, 5000);
  }
}
