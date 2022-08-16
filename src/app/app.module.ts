import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TriggerCategoriesComponent } from './trigger-categories/trigger-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TriggerCategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
        RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'trigger-categories', component: TriggerCategoriesComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
