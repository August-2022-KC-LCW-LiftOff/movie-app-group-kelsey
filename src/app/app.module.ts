import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TriggerCategoriesComponent } from './trigger-categories/trigger-categories.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TriggerCategoriesComponent,
    AddReviewComponent,
    SearchBarComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
        RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'trigger-categories', component: TriggerCategoriesComponent },
      { path: 'add-review', component: AddReviewComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
