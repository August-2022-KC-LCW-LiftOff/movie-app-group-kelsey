import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { WarningService } from '../shared/crud.service'
import { TriggerWarning } from '../shared/trigger-warning';
import { map } from 'rxjs/operators';


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
    console.log("Yippee");
    //this.warningService.getAll().subscribe(response => console.log(response.payload));
  }

  // retrieveWarnings(): void {
  //   this.warningService.getAll().snapshotChanges().pipe(
  //     map(changes =>
  //       changes.map(c =>
  //         ({ id: c.payload.doc.id, ...c.payload.doc.data() })
  //       )
  //     )
  //   ).subscribe(data => {
  //     this.triggerWarnings = data;
  //   });
  //   console.log(this.triggerWarnings);
  // }
}
