import { Injectable } from '@angular/core';
import { TriggerWarning } from './trigger-warning';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  triggerWarningsRef: AngularFireList<any>;
  triggerWarningRef: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {}

  AddTriggerWarning(triggerWarning: TriggerWarning) {
    this.triggerWarningsRef.push({
    headline: triggerWarning.headline,
    movieTitle: triggerWarning.movieTitle, 
    warning: triggerWarning.warning, 
    category: triggerWarning.category, 
    subcategory: triggerWarning.subcategory, 
    userId: triggerWarning.userId, 
})
    }
  }

