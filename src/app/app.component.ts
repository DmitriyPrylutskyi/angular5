import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular';
  cars = [
    { name: 'Mersedes', isSold: false},
    { name: 'BMW', isSold: true},
    { name: 'Audi', isSold: false}
  ];

  addCar(carName: string) {
    this.cars.push({
      name: carName,
      isSold: false
    });
  }
}
