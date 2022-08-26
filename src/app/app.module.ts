import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TriggerCategoriesComponent } from './trigger-categories/trigger-categories.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { CarouselComponent } from './carousel/carousel.component';
//import { CommentsComponent } from './comments/comments.component';
//import { CommentsModule } from './comments/comments.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TriggerCategoriesComponent,
    AddReviewComponent,
    FaqPageComponent,
    MovieListComponent,
    CarouselComponent,
    //CommentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
        RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'trigger-categories', component: TriggerCategoriesComponent },
      { path: 'add-review', component: AddReviewComponent },
      { path: 'faq-page', component: FaqPageComponent },
      { path: 'movie-list', component: MovieListComponent },
    ]), //CommentsModule, 
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
