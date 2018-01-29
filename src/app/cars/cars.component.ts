import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  carName = '';
  carYear = 2018;
  cars: [{name: string, year: number}] =
  [
    {
      name: 'Mersedes',
      year: 2015
    },
    {
    name: 'BMW',
    year: 2016
    },
    {
      name: 'Audi',
      year: 2017
    }
  ];

  constructor() {

  }

  ngOnInit() {
  }

  addCar() {
    this.cars.push({
      name: this.carName,
      year: this.carYear
    });
    this.carName = '';
    this.carYear = 2018;
  }
}
