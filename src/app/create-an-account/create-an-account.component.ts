import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-create-an-account',
  templateUrl: './create-an-account.component.html',
  styleUrls: ['./create-an-account.component.css']
})
export class CreateAnAccountComponent implements OnInit {

  constructor(private router:Router, public auth: AuthService) { }

  ngOnInit() {
  }
  loginWithRedirect(): void {
    this.auth.loginWithRedirect({ screen_hint: 'signup' });
  }
}
