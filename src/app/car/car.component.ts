 import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  template: `
  	<h4>I am car</h4>
  `,
  styles: [`
  	h4 {
		color: blue;
	}
  `]
})
export class CarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
