import {AfterViewInit, Component, ContentChild, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit, AfterViewInit {
  @Input('carItem') car: {name: string, year: number};
  @ContentChild('carHeading') carHeading: ElementRef;

  constructor() {

  }

  ngAfterViewInit() {
    console.log(this.carHeading);
  }

  ngOnInit() {
  }
}
