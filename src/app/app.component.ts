import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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
  minChars = 6;

  ngOnInit() {
    this.form = new FormGroup({
      userdata: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, this.checkLength.bind(this)])
      }),
      country: new FormControl(''),
      answer: new FormControl('no')
    });
  }

  checkLength(control: FormControl) {
    if (control.value.length < this.minChars ) {
      return {
        'lengthError': true
      };
    }

    return null;
  }

  onSubmit() {
    console.log('Submitted', this.form);
  }
}
