import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { TriggerWarning } from './trigger-warning';


@Injectable({
  providedIn: 'root'
})
export class WarningService {
  private dbPath = '/warning';

  warningsRef: AngularFirestoreCollection<TriggerWarning>;

  constructor(private db: AngularFirestore) {
    this.warningsRef = db.collection(this.dbPath);
  }

  // getAll(): any {
  //   return this.db.collection('warning').snapshotChanges();
  // }

  getAll(): any {
    return new Promise<any>((resolve)=> {
      this.db.collection('warning').snapshotChanges();
    })
    console.log("testing, baby");
  }

  create(warning: TriggerWarning): any {
    return this.warningsRef.add({ ...warning });
  }

  update(id: string, data: any): Promise<void> {
    return this.warningsRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.warningsRef.doc(id).delete();
  }
}
