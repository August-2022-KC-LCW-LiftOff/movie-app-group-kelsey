import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Search } from '../search';
import { ApiMovieService } from '../api-movie.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  

  constructor(private router:Router, private httpClient: HttpClient, private apiMovies: ApiMovieService) { }

  onSearch() {this.router.navigate(['movie-list'])}

  onSignIn() {this.router.navigate(['sign-in-page'])}

  ngOnInit() {
    this.apiMovies.search("Jaws", 1975).subscribe((data) => {
      console.log(data);
      })
  }

}
