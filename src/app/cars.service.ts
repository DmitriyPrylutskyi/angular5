import { Injectable } from '@angular/core';

@Injectable()
export class CarsService {
  cars = [
    {
      name: 'Ford',
      id: 1
    },
    {
      name: 'BMW',
      id: 2
    },
    {
      name: 'Audi',
      id: 3
    }
  ];
}
