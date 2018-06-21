import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent, UsersComponent, UserComponent, PagesComponent, PageOneComponent, PageTwoComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
    PagesComponent,
    PageOneComponent,
    PageTwoComponent
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
