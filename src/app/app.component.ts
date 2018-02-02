import { Component } from '@angular/core';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { Observable } from 'rxjs/Observable';

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

  asyncTitle = Observable.of('Async Title').delay(3000);

  addCar() {
    this.cars.push({
      name: 'New Car',
      year: 2000
    });
  }
}
