import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/app.routing.module';
import { CarsService } from './cars.service';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { HomePageComponent } from './home-page/home-page.component';
import { CarsPageComponent } from './cars-page/cars-page.component';
import { CarPageComponent } from './car-page/car-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewsPageComponent } from './news-page/news-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CarsPageComponent,
    CarPageComponent,
    NotFoundComponent,
    NewsPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CarsService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }
