import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})

export class CarComponent implements OnInit, DoCheck, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('carItem') car: {name: string, year: number};
  @Input() name: string ;
  @ContentChild('carHeading') carHeading: ElementRef;

  constructor() {
    console.log('constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes: ', changes);
  }

  ngOnInit() {
    console.log('init');
  }

  ngDoCheck() {
    console.log('check');
  }

  ngAfterContentInit() {
    console.log('content init');
  }

  ngAfterContentChecked() {
    console.log('content check');
  }

  ngAfterViewInit() {
    console.log('view init');
  }

  ngAfterViewChecked() {
    console.log('view check');
  }

  ngOnDestroy() {
    console.log('destroy');
  }
}
