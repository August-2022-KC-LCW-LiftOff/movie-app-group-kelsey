import { Component, OnInit } from '@angular/core';

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
  triggerTags: string[] = [
    'Abuse and abusive sexual behavior',
    'Auditory triggers',
    'Bodily fluids/functions',
    'Body mutilation',
    'Childhood myth is spoiled',
    'Death',
    'Ending is sad',
    'Frightening animals',
    'Hate behaviors/sentiments depicted',
    'Hate speech/slurs',
    'Historical event depicted',
    'Jump scare',
    'Medical scene or medical emergency',
    'Member of a specific age group is harmed',
    'Physical assault',
    'Psychological or physical experiences',
    'Religion and religious trauma',
    'Self-harm',
    'Sexual content or nudity',
    'Substance use',
  ];

  constructor() {}
  onSubmit(form: any) {
    console.log(form.value);
  }

  ngOnInit(): void {
  }

}
