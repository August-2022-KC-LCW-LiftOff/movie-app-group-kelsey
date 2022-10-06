import { Component, OnInit } from '@angular/core';
import { Trigger } from '../types-global';
import triggersJson from './../../assets/triggers.json';
import { WarningService } from '../shared/crud.service'
import { FormBuilder, FormGroup, NgForm } from '@angular/forms'


export class User {
  public name!: string;
  public email!: string;
  public password!: string;
  public triggerTags!: string;
}
@Component({
  selector: 'app-add-trigger-form',
  templateUrl: './add-trigger-form.component.html',
  styleUrls: ['./add-trigger-form.component.css']
})
export class AddTriggerFormComponent implements OnInit {
  triggerTags: string[] = triggersJson.map(trigger => trigger.title);
  selectedTrigger: string = "";
  triggerSubcategories: string[] = [];
  triggerWarning: FormGroup;

  constructor(public crudApi: WarningService, public fb: FormBuilder) {}
 
  onSelectedTriggerChange(trigg: string){
    this.selectedTrigger = trigg;
    this.triggerSubcategories = triggersJson.find(trigger => trigger.title === trigg).subcategories;
  }
  ngOnInit(): void {
    this.triggerWarningForm()
    console.log(this.triggerWarning)
  }

  triggerWarningForm() {
    this.triggerWarning = this.fb.group({
    headline: [''],
    movieTitle: [''],
    movieId: ['12'],
    warning: [''], 
    category: [null],
    subcategory: [null],
    userId: [''],
    });
  }

  get headline() {
    return this.triggerWarning.get('headline');
  }

  get movieTitle() {
    return this.triggerWarning.get('movieTitle')
  }

  get warning() {
    return this.triggerWarning.get('warning')
  }

  get category() {
    return this.selectedTrigger
  }

  get subcategory() {
    return this.triggerWarning.get('subcategory')
  }

  ResetForm() {
    this.triggerWarning.reset();
  }

  submitTriggerWarningData() {  
    // console.log(this.triggerWarning);
    //this.crudApi.AddTriggerWarning(this.triggerWarning.value);
    // console.log("Hello");
    this.ResetForm();
    
  }
}
