import { Component, OnInit } from '@angular/core';
import { Trigger } from '../types-global';
import triggersJson from './../../assets/triggers.json';

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

  constructor() {}
  onSubmit(form: any) {
    console.log(form.value);
  }
  onSelectedTriggerChange(trigg: string){
    this.selectedTrigger = trigg;
    this.triggerSubcategories = triggersJson.find(trigger => trigger.title === trigg).subcategories;
  }
  ngOnInit(): void {
  }

}
