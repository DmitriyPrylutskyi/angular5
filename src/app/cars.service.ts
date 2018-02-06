import { Injectable } from '@angular/core';

@Injectable()
export class CarsService {
  cars = [
    {
      name: 'Ford',
      year: 2017,
      color: 'red',
      id: 1
    },
    {
      name: 'BMW',
      year: 2016,
      color: 'black',
      id: 2
    },
    {
      name: 'Audi',
      year: 2015,
      color: 'white',
      id: 3
    }
  ];
}
