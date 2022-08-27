import { ApiMovieService } from './../api-movie.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor(private movieApi: ApiMovieService) { }

  ngOnInit() {
  }

}
