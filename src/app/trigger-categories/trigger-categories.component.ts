import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import triggersJson from './../../assets/triggers.json';
@Component({
  selector: 'app-trigger-categories',
  templateUrl: './trigger-categories.component.html',
  styleUrls: ['./trigger-categories.component.css']
})
export class TriggerCategoriesComponent implements OnInit {
  triggers = triggersJson;
  openAccordion = [];

  constructor() { }

  ngOnInit() {
    console.log(this.triggers);
  }
}
