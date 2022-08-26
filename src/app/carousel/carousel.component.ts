import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) {
    
   }
   slides: string[]=[];
   activeIndex: number = 0;
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
  carouselOneSlides:string[]=[
    "https://m.media-amazon.com/images/M/MV5BZTAzNWZlNmUtZDEzYi00ZjA5LWIwYjEtZGM1NWE1MjE4YWRhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg", 
    "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg", 
    "https://m.media-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_SX300.jpg"
  ]

  carouselTwoSlides:string[]=[
    "https://m.media-amazon.com/images/M/MV5BZTllNDU0ZTItYTYxMC00OTI4LThlNDAtZjNiNzdhMWZiYjNmXkEyXkFqcGdeQXVyNzY1NDgwNjQ@._V1_SX300.jpg", 
    "https://m.media-amazon.com/images/M/MV5BYzdiOTVjZmQtNjAyNy00YjA2LTk5ZTAtNmJkMGQ5N2RmNjUxXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
    "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
  ]
  ngOnInit() {
    if (this.collection==="trending") {
      this.slides = this.carouselOneSlides
    } else {
      this.slides = this.carouselTwoSlides
    }
  }

}
