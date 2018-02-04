import {Component, OnInit} from '@angular/core';
import {CarsService} from '../cars.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.scss']
})
export class CarAddComponent implements OnInit {

  carName = '';

  constructor(private carService: CarsService) {  }

  ngOnInit() {
  }

  addCar() {
    this.carService.addCar(this.carName);
    this.carName = '';
  }

}
