import { Component, OnInit } from '@angular/core';
import triggersJson from './../../assets/triggers.json';
import { WarningService } from '../services/warning-service'
import { FormControl, FormGroup } from '@angular/forms';
import { MovieListComponent } from '../movie-list/movie-list.component';

@Component({
  selector: 'app-add-trigger-form',
  templateUrl: './add-trigger-form.component.html',
  styleUrls: ['./add-trigger-form.component.css']
})
export class AddTriggerFormComponent {
  triggerTags: string[] = triggersJson.map(trigger => trigger.title);
  selectedTrigger: string = "";
  triggerSubcategories: string[] = [];
  triggerWarningForm = new FormGroup({
    headline: new FormControl(''),
    movieTitle: new FormControl(''),
    movieId: new FormControl('12'), 
    warning: new FormControl(''), 
    category: new FormControl(''), 
    subcategory: new FormControl(''),
  });
  completedForm: any;
  constructor(public crudApi: WarningService, public movieListComponent: MovieListComponent) {}
 
  // ngOnInit(): void {
  // }

  onSelectedTriggerChange(trigg: string){
    this.selectedTrigger = trigg;
    this.triggerSubcategories = triggersJson.find(trigger => trigger.title === trigg).subcategories;
  }


  onSubmit() {
    console.log(this.triggerWarningForm.value);
    this.completedForm = this.triggerWarningForm.value;
    this.crudApi.addWarning(this.triggerWarningForm.value);
    this.movieListComponent.getMovieWarnings(this.completedForm.movieTitle);
    this.triggerWarningForm.reset();
  }
}


