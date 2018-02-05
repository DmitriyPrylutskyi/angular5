import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators';

import { Car } from './app.component';


@Injectable()
export class CarsService {
  url = 'http://localhost:3100/cars/';

  constructor(private httpClient: HttpClient) { }

  getCars() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf8'
    });
    return this.httpClient
      .get(this.url, {headers: headers})
      .pipe(
        catchError(this.handleError)
      );
  }

  addCar(carName: string, carColor: string) {
    const data = {
      name: carName,
      color: carColor
    };

    return this.httpClient
      .post(this.url, data)
      .pipe(
        catchError(this.handleError)
      );
  }

  setColorCar(car: Car, color: string) {
    car.color = color;
    return this.httpClient
      .put(this.url + car.id, car)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteCar(id: number) {
    return this.httpClient
      .delete(this.url + id)
      .pipe(
        catchError(this.handleError)
      );
  }

  handleError() {
    return new ErrorObservable(
      'Something bad happened. Please try again later.');
  }
}
