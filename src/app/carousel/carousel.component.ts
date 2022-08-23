import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }
    movies: any[] = [];
    recentMovieSearch(){
      fetch('http://www.omdbapi.com/?i=tt3896198&apikey=9ec16e46') 
    }
  ngOnInit() {
  }

}
http://www.omdbapi.com/?i=tt3896198&apikey=9ec16e46