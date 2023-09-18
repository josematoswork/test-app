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
    firstName: new UntypedFormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(5),
    ]),
    lastName: new UntypedFormControl('', [Validators.required]),
    readOnly: new UntypedFormControl('some text'),
  });

  ngOnInit(): void {
    this.myForm.valueChanges.subscribe(value => {
      console.log('valueChanges', value);
    });
  }

  onSubmit(form: UntypedFormGroup) {
    console.log('Valid?', form.valid);
  }
}
