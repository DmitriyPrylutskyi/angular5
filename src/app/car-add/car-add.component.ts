import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.scss']
})
export class CarAddComponent implements OnInit {

  @Output() CarAdd = new EventEmitter<string>();

  carName = '';

  constructor() { }

  ngOnInit() {
  }

  addCar() {
    this.CarAdd.emit(this.carName);
    this.carName = '';
  }

}
