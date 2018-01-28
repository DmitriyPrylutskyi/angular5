 import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  carName = 'Ford';
  carYear = 2015;

  constructor() { }
 
  ngOnInit() {
  }

}
