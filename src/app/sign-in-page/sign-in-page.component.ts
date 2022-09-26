import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }
  loginWithRedirect(): void {
    this.auth.loginWithRedirect();
}
}