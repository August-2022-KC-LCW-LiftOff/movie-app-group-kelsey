import { ApiResponse } from './../types-global';
import { Component, OnInit } from '@angular/core';
import { Search } from '../search';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiMovieService } from './../api-movie.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})

export class SearchResultsComponent implements OnInit {
  search: Search = {
    movie: "",
    year: null
  }
  
  searchResults: any;
  searchedMovieData: any;

  searchChangeMovie(value: string) {
    this.search.movie = value;
  }

  searchChangeYear(value: number){
    this.search.year = value;
  }

  constructor(private http: HttpClient, private router:Router, private apiMovies: ApiMovieService) { }

  onSearch() {
      this.apiMovies.search(this.search.movie, this.search.year).subscribe((data) => {
        const searchedMovieData = data as ApiResponse;
        this.searchResults = searchedMovieData.results;
        this.search = {
          movie: "",
          year: null
        }
        this.router.navigateByUrl('/movie-list',{state: {movieSearchResults: this.searchResults}});
      }) 
  }


  ngOnInit(): void {}

}