import { ApiResponse } from './../types-global';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiMovieService } from '../api-movie.service';
import { ApiResponse, Movie } from '../types-global';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,
    private apiMovies: ApiMovieService) {
   }

  slides: string[]=[];
  activeIndex: number = 0;
  trendingMovieData = null;
  upcomingMovieData = null;

  @Input() collection:string;

  onPrev() {
    if (this.activeIndex > 0) {
      this.activeIndex = this.activeIndex - 1} else {
        this.activeIndex = this.slides.length - 1;
      }
  }
  onNext() {
    if (this.activeIndex !== this.slides.length - 1) {
    this.activeIndex = this.activeIndex + 1} else {
      this.activeIndex = 0;
    }
  }
  ngOnInit() {
    if (this.collection==="trending") {
      this.apiMovies.getTrendingMovies().subscribe((data) => {
        this.trendingMovieData = data as ApiResponse;
        console.log(this.trendingMovieData);
        this.slides = this.trendingMovieData.results.map(movie => `https://image.tmdb.org/t/p/original${movie.poster_path}`);
      })
    } else {
      this.apiMovies.getUpcomingMovies().subscribe((data) => {
        this.upcomingMovieData = data as ApiResponse;
        console.log(this.upcomingMovieData);
        this.slides = this.upcomingMovieData.results.map(movie => `https://image.tmdb.org/t/p/original${movie.poster_path}`);
      }) 
    }
  }
}