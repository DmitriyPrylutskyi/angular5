import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CarsService {

  constructor(private httpClient: HttpClient) { }

  getCars() {
    return this.httpClient.get('http://localhost:3000/cars');
  }
}
