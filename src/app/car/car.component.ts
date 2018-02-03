import {Component, Input, OnInit} from '@angular/core';
import {ConsoleService} from '../console.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
  providers: [ConsoleService]
})
export class CarComponent implements OnInit {

  @Input() car;

  constructor(private consoleService: ConsoleService) { }

  ngOnInit() {
  }

  getClass() {
    return {
      'list-group-item-success': !this.car.isSold,
      'list-group-item-danger': this.car.isSold,
      'list-group-item': true
    };
  }

  onAction(type: string) {
    this.car.isSold = (type === 'buy') ? true : false;
    this.consoleService.log(`${this.car.name} status = ${type}`);
  }
}
