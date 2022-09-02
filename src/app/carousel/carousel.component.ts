import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiMovieService } from '../api-movie.service';
import { Movie } from '../types-global';

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
        this.trendingMovieData = data.results as Movie[];
        console.log(this.trendingMovieData);
        this.slides = this.trendingMovieData.map(movie => `https://image.tmdb.org/t/p/original${movie.poster_path}`);
      })
    } else {
      this.apiMovies.getUpcomingMovies().subscribe((data) => {
        this.upcomingMovieData = data.results as Movie[];
        console.log(this.upcomingMovieData);
        this.slides = this.upcomingMovieData.map(movie => `https://image.tmdb.org/t/p/original${movie.poster_path}`);
      }) 
    }
  }
}