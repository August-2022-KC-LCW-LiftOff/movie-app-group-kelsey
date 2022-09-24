import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiMovieService } from '../api-movie.service';
@Component({
  selector: 'app-navbar',              
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  

  constructor(private router:Router, private httpClient: HttpClient, private apiMovies: ApiMovieService) { }

  onSignIn() {this.router.navigate(['sign-in-page'])}

  ngOnInit() {
  }

}
