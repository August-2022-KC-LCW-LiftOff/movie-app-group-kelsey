import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {

  movieResults = [];
  //moviePoster = ;

  constructor(private location: Location) { }

  ngOnInit() {
    const history: any = this.location.getState();
    this.movieResults = history?.movieSearchResults;
  }

}
