import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-an-account',
  templateUrl: './create-an-account.component.html',
  styleUrls: ['./create-an-account.component.css']
})
export class CreateAnAccountComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
