import { Component, OnInit } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  myForm: UntypedFormGroup = new UntypedFormGroup({
    name: new UntypedFormControl('gggg gg', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: UntypedFormGroup) {
    console.log('Valid?', form.valid); // true or false
  }
}
