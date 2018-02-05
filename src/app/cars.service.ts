import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Car } from './app.component';

@Injectable()
export class CarsService {
  url = 'http://localhost:3000/cars';

  constructor(private httpClient: HttpClient) { }

  getCars() {
    return this.httpClient.get(this.url);
  }

  addCar(carName: string, carColor: string) {
    const data = {
      name: carName,
      color: carColor
    };

    return this.httpClient.post(this.url, data);
  }

  changeColor(car: Car, color: string) {
    car.color = color;
    return this.httpClient.put(this.url + '/' + car.id, {car});
  }
}
