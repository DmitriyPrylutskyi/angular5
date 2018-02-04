import { Injectable } from '@angular/core';
import { ConsoleService } from './console.service';

@Injectable()
export class CarsService {
  cars = [
    { name: 'Mersedes', isSold: false},
    { name: 'BMW', isSold: true},
    { name: 'Audi', isSold: false}
  ];

  constructor(private consoleService: ConsoleService) { }

  addCar(carName: string) {
    this.cars.push({
      name: carName,
      isSold: false
    });
    this.consoleService.log(`Car ${carName} was addeed`);
  }
}
