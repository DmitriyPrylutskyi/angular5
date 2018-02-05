import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('form') form: NgForm;

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

  defaultAnswer = 'no';
  formData = {};
  isSubmitted = false;

  ngOnInit() {

  }

  addRandEmail() {
    const randEmail = 'test@gmail.com';

    this.form.form.patchValue({
      userData: {email: randEmail}
    });
  }


  submitForm() {
    this.isSubmitted = true;
    this.formData = this.form.value;
    this.form.reset();
    this.form.form.patchValue({
      answer: 'no'
    });
  }
}
