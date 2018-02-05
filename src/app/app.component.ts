import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular';
  answers = [
    {
      type: 'yes',
      text: 'yes'
    },
    {
      type: 'no',
      text: 'no '
    },
  ];

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      country: new FormControl(''),
      answer: new FormControl('no')
    });
  }

  onSubmit() {
    console.log('Submitted', this.form);
  }
}
