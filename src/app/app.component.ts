import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular';
  headerText = 'Create my directive.';
  items = [1, 2, 3, 4 , 5];
  current = 1;

  onClick (number: number) {
    this.current = number;
  }
}
