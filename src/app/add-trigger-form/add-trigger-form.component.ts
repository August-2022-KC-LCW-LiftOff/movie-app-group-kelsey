import { Component, OnInit } from '@angular/core';
import { Trigger } from '../types-global';
import triggersJson from './../../assets/triggers.json';
import { WarningService } from '../services/warning-service'
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms'
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-add-trigger-form',
  templateUrl: './add-trigger-form.component.html',
  styleUrls: ['./add-trigger-form.component.css']
})
export class AddTriggerFormComponent implements OnInit {
  triggerTags: string[] = triggersJson.map(trigger => trigger.title);
  selectedTrigger: string = "";
  triggerSubcategories: string[] = [];
  triggerWarningForm = new FormGroup({
    headline: new FormControl(''),
    movieTitle: new FormControl(''),
    movieId: new FormControl('12'), 
    warning: new FormControl(''), 
    category: new FormControl(''), 
    subcategory: new FormControl('')
  });
  constructor(public crudApi: WarningService, public fb: FormBuilder) {}
 
  onSelectedTriggerChange(trigg: string){
    this.selectedTrigger = trigg;
    this.triggerSubcategories = triggersJson.find(trigger => trigger.title === trigg).subcategories;
  }
  ngOnInit(): void {
  }



  ResetForm() {
    this.triggerWarningForm.reset();
  }

  submitTriggerWarningData() {  
    console.log(this.triggerWarningForm);
    this.crudApi.addWarning(this.triggerWarningForm.value);
    this.ResetForm();
  }
}
