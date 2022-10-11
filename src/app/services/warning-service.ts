import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { TriggerWarning } from '../types-global';



 @Injectable({
   providedIn: 'root'
 })
 export class WarningService {
   constructor(private db: AngularFirestore) { }
    
    async addWarning(warning: any) {
        await this.db.collection('warning').add(warning)
    
}

   getWarnings(title: string) {
     return new Promise<any>((resolve)=> {
       this.db.collection('warning', ref => ref.where('movieTitle', '==', title)).valueChanges().subscribe(warning => resolve(warning))
     })
   }
 }