import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TriggerCategoriesComponent } from './trigger-categories/trigger-categories.component';``
import { AddReviewComponent } from './add-review/add-review.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CommentsModule } from './comments/comments.module';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { CommentFormComponent } from './commentForm/commentForm.component';
import { CommentsService } from './comments/comments.service';
import { FormBuilder } from '@angular/forms';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { CreateAnAccountComponent } from './create-an-account/create-an-account.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireFunctionsModule } from '@angular/fire/compat/functions';
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { AuthenticationButtonComponent } from './components/authentication-button/authentication-button.component';
import { AuthNavComponent } from './components/auth-nav/auth-nav.component';
import { AddTriggerFormComponent } from './add-trigger-form/add-trigger-form.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './pages/profile/profile/profile.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { FooterComponent } from './footer/footer.component';
import { ShowcaseComponent } from './showcase/showcase.component';
import { SignInButtonComponent } from './sign-in-button/sign-in-button.component';
import { FaqSectionComponent } from './faq-section/faq-section.component';
import { DriveInImageComponent } from './drive-in-image/drive-in-image.component';
import { TriggersDisplayComponent } from './triggers-display/triggers-display.component';

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
    SignInPageComponent,
    CreateAnAccountComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    AuthenticationButtonComponent,
    AuthNavComponent,
    AddTriggerFormComponent,
    SearchResultsComponent,
    ProfileComponent,
    ScrollToTopComponent,
    FooterComponent,
    ShowcaseComponent,
    SignInButtonComponent,
    FaqSectionComponent,
    DriveInImageComponent,
    TriggersDisplayComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(env.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireMessagingModule,
    AngularFireDatabaseModule,
    AngularFireFunctionsModule,
    AppRoutingModule,
    CommentsModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule.forRoot({
      ...env.auth,
    }),
    AppRoutingModule, 
        RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'trigger-categories', component: TriggerCategoriesComponent },
      { path: 'add-review', component: AddReviewComponent },
      { path: 'faq-page', component: FaqPageComponent },
      { path: 'movie-list', component: MovieListComponent },
      { path: 'sign-in-page', component: SignInPageComponent },
      { path: 'create-an-account', component: CreateAnAccountComponent },
    ]), 
  ],
  providers: [CommentsService, CommentFormComponent, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
