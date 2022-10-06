import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TriggerWarning } from '../shared/trigger-warning';
import { WarningService } from 'src/app/services/warning-service';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {
  warnings: any;
  movieResults = [];
  triggerWarnings: any;
  //moviePoster = ;

  constructor(private location: Location, public warningService: WarningService) { }

  ngOnInit() {
    const history: any = this.location.getState();
    this.movieResults = history?.movieSearchResults;
    // you could also do this by ID, if you wanted a more specific movie search (aka not just the first result)
    this.getMovieWarnings(this.movieResults[0].title);
}

  async getMovieWarnings(title) {
    this.triggerWarnings = await this.warningService.getWarnings(title);
    console.log(this.triggerWarnings);
  }  
}
