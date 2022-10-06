import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class WarningService {
  constructor(private db: AngularFirestore) { }

  getWarnings(title: string) {
    return new Promise<any>((resolve)=> {
      this.db.collection('warning', ref => ref.where('movieTitle', '==', title)).valueChanges().subscribe(warning => resolve(warning))
    })
  }
}
