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
import { CommentsComponent } from './comments/comments.components';
import { CommentsModule } from './comments/comments.module';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { CommentFormComponent } from './commentForm/commentForm.component';
import { CommentComponent } from './comment/comment.component';
import { CommentsService } from './comments/comments.service';
import { FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { CreateAnAccountComponent } from './create-an-account/create-an-account.component';
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { SignupButtonComponent } from './components/signup-button/signup-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { AuthenticationButtonComponent } from './components/authentication-button/authentication-button.component';
import { AuthNavComponent } from './components/auth-nav/auth-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TriggerCategoriesComponent,
    AddReviewComponent,
    FaqPageComponent,
    MovieListComponent,
    CarouselComponent,
    NavbarComponent,
    CommentsComponent,
    CommentFormComponent,
    CommentComponent
    SignInPageComponent,
    CreateAnAccountComponent,
    LoginButtonComponent,
    SignupButtonComponent,
    LogoutButtonComponent,
    AuthenticationButtonComponent,
    AuthNavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule.forRoot({...env.auth,}),
    AppRoutingModule, 
        RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'trigger-categories', component: TriggerCategoriesComponent },
      { path: 'add-review', component: AddReviewComponent },
      { path: 'faq-page', component: FaqPageComponent },
      { path: 'movie-list', component: MovieListComponent },
    ]), HttpClientModule,
      { path: 'sign-in-page', component: SignInPageComponent },
      { path: 'create-an-account', component: CreateAnAccountComponent },
    ])
  ],
  providers: [CommentsService,CommentFormComponent, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
