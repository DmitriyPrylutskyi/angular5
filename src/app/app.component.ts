import {Component, OnInit} from '@angular/core';
import {CarsService} from './cars.service';

export interface Car {
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
  colors = [
    'red',
    'blue',
    'black',
    'yellow',
    'grey'
  ];

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
      .addCar(this.carName, this.getRandColor())
      .subscribe((car: Car) => {
        this.cars.push(car);
      });
    this.carName = '';
  }

  getRandColor() {
    const posColor = Math.round(Math.random() * (this.colors.length - 1));
    return this.colors[posColor];
  }

  changeColor(car: Car) {
    this.carsService.changeColor(car, this.getRandColor())
      .subscribe((data) => {
        console.log(data);
      });
  }
}
