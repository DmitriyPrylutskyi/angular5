import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  carName = '';
  isAddCar = false;
  cars = ['Mersedes', 'BMW', 'Audi'];

  constructor() {

  }

  ngOnInit() {
  }

   addCar() {
    this.isAddCar = true;
    this.cars.push(this.carName);
    this.carName = '';
  }
}
