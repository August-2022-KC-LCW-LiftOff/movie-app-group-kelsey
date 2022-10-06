import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'; 
import { WarningService } from './shared/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
constructor(private warningService: WarningService) {}

  title = 'Movie Project';

  dataSource : any;

  ngOnInit(): void {
    this.getWarnings();
  }

  async getWarnings() {
    
  }

  // ngOnInit(){
    
  //   this.getAll();
  // }
  
  // getAll(){
  //   this.store.collection('warning').snapshotChanges().subscribe((response) => {
  //       this.dataSource = response.map(item => 
  //         console.log(item.payload)
  //         //Object.assign({id : item.payload.doc.id}, item.payload.doc.data())
  //       );
  //     })
  //     console.log("Hello, world")
  //     console.log(this.dataSource);
  // }
}
