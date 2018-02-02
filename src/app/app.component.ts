import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular';
  cars = [
    { name: 'Mersedes', year: 2001},
    { name: 'BMW', year: 2002},
    { name: 'Audi', year: 2003},
    { name: 'FW', year: 2004},
    { name: 'Ford', year: 2005},
    { name: 'Toyota', year: 2006}
  ];
  searchCar = '';

  addCar() {
    this.cars.push({
      name: 'New Car',
      year: 2000
    });
  }
}
