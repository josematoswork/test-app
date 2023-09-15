import { Component, Inject, Input, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { FORM_ERROR_PROVIDER } from '../../constants/error-factory';

@Component({
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

  errorText: string = '';
  value: any;

  onChange: (_: any) => void = (_: any) => {};
  onTouched: () => void = () => {};

  constructor(
    @Inject(FORM_ERROR_PROVIDER) private errorFactory: any,
    @Self() @Optional() public ngControl: NgControl // Inject NgControl
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
    // implement this method if you need to support disabling the control
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
