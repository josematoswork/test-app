/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Inject, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { FORM_ERROR_PROVIDER } from '../../constants/error-factory';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'mylib-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
})
export class TextInputComponent implements ControlValueAccessor {
  @Input() type?: string = 'text';
  @Input() isDisabled?: boolean = false;
  @Input() isRequired?: boolean = false;
  @Input() isReadOnly?: boolean = false;
  @Input() maxLength?: number;
  @Input() placeholder?: string = '';

  errorText = '';
  value: any;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  onChange: (_: any) => void = (_: any) => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched: () => void = () => {};

  constructor(
    @Inject(FORM_ERROR_PROVIDER) private errorFactory: any,
    @Self() @Optional() public ngControl: NgControl
  ) {
    if (ngControl) {
      ngControl.valueAccessor = this;
    }
  }
  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onInputChange(event: any) {
    this.value = event.target.value;
    this.onChange(this.value);
    this.onTouched();
    this.setErrorText();
  }

  private setErrorText(): void {
    if (
      this.ngControl &&
      this.ngControl.control &&
      this.ngControl.control.errors
    ) {
      const errorKeys = Object.keys(this.ngControl.control.errors);
      const errorKey = errorKeys[0];
      this.errorText = this.errorFactory[errorKey](
        this.ngControl.control.errors[errorKey]
      );
    } else {
      this.errorText = '';
    }
  }
}
