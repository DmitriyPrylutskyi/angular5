import {Component, OnInit} from '@angular/core';
import {CarsService} from './cars.service';

interface Car {
  name: string;
  color: string;
  id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular';
  cars: Car[] = [];
  carName = '';
  carColor = '';

  constructor(private carsService: CarsService) {}

  ngOnInit() {

  }

  loadCars() {
    this.carsService
      .getCars()
      .subscribe((cars: Car[] ) => {
        this.cars = cars;
      });
  }

  addCar() {
    this.carsService
      .addCar(this.carName, this.carColor)
      .subscribe((car: Car) => {
        this.cars.push(car);
      });
    this.carName = '';
    this.carColor = '';
  }
}
