import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
//import { CommentsComponent } from '../comments/comments.components';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

// @NgModel({
//   imports: [CommentsComponent],
// })

export class MovieListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
