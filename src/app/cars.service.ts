import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Car } from './app.component';

@Injectable()
export class CarsService {
  url = 'http://localhost:3000/cars/';

  constructor(private httpClient: HttpClient) { }

  getCars() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf8'
    });
    return this.httpClient.get(this.url, {headers: headers});
  }

  addCar(carName: string, carColor: string) {
    const data = {
      name: carName,
      color: carColor
    };

    return this.httpClient.post(this.url, data);
  }

  setColorCar(car: Car, color: string) {
    car.color = color;
    return this.httpClient.put(this.url + car.id, car);
  }

  deleteCar(id: number) {
    return this.httpClient.delete(this.url + id);
  }
}
