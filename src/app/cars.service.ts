import { Injectable } from '@angular/core';

@Injectable()
export class CarsService {
  cars = [
    { name: 'Mersedes', isSold: false},
    { name: 'BMW', isSold: true},
    { name: 'Audi', isSold: false}
  ];

  constructor() { }

  addCar(carName: string) {
    this.cars.push({
      name: carName,
      isSold: false
    });
  }
}
