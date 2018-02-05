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
        email: new FormControl('', [Validators.required, Validators.email], this.checkEmail),
        password: new FormControl('', [Validators.required, this.checkLength.bind(this)])
      }),
      country: new FormControl('', Validators.required),
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

  checkEmail(control: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@gmail.com') {
          resolve({
            'emailIsUsed': true
          });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }

  onSubmit() {
    console.log('Submitted', this.form);
  }
}
