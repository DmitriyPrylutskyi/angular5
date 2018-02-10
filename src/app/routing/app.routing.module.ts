import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from '../home-page/home-page.component';
import { CarsPageComponent } from '../cars-page/cars-page.component';
import { CarPageComponent } from '../car-page/car-page.component';
import { NewsPageComponent } from '../news-page/news-page.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { AuthGuard } from '../auth.guard';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'news', component: NewsPageComponent },
  { path: 'cars', component: CarsPageComponent, canActivate: [AuthGuard], children: [
      { path: ':id/:name', component: CarPageComponent }
    ] },
  { path: 'not-found', component: NotFoundComponent},
  { path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule { }
