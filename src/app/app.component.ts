import {Component, OnInit} from '@angular/core';
import { CarsService } from './cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular';
  cars = [];

  constructor (private carsService: CarsService) {};

  ngOnInit() {
    this.cars = this.carsService.cars;
  }
}
