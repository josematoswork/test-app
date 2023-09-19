/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Component,
  Inject,
  Input,
  OnInit,
  Optional,
  Self,
} from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { FORM_ERROR_PROVIDER } from '../../constants/error-factory';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'mylib-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
})
export class TextInputComponent implements ControlValueAccessor, OnInit {
  @Input() labelText?: string = '';
  @Input() labelHelperText?: string = '';
  @Input() helperText?: string = '';
  @Input() placeholder?: string = '';
  @Input() type?: string = 'text';
  @Input() isDisabled?: boolean = false;
  @Input() isReadOnly?: boolean = false;
  @Input() isLoading?: boolean = false;
  @Input() showClearButton?: boolean = false;

  errorMessage = '';
  value: any;
  isRequired?: boolean = false;
  isDisabledState = true;
  maxLength?: number | null;

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

  ngOnInit(): void {
    if (this.hasRequiredValidator()) {
      this.labelHelperText = 'Required';
    }
    this.maxLength = this.getMaxLength();
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
    this.isDisabledState = isDisabled;
  }

  onInputChange(event: any) {
    this.value = event.target.value;
    this.onChange(this.value);
    this.onTouched();
    this.setErrorText();
  }

  handleClearButtonClick() {
    this.writeValue('');
  }

  private setErrorText(): void {
    if (
      this.ngControl &&
      this.ngControl.control &&
      this.ngControl.control.errors
    ) {
      const errorKeys = Object.keys(this.ngControl.control.errors);
      const errorKey = errorKeys[0];
      this.errorMessage = this.errorFactory[errorKey](
        this.ngControl.control.errors[errorKey]
      );
    } else {
      this.errorMessage = '';
    }
  }

  private hasRequiredValidator(): boolean {
    if (this.ngControl && this.ngControl.control) {
      const errors = this.ngControl.control.errors;
      return errors && errors['required'];
    }
    return false;
  }

  private getMaxLength(): number | null {
    if (this.ngControl && this.ngControl.control) {
      const validator = this.ngControl.control.validator;

      if (validator) {
        const validationErrors = validator(
          new FormControl(Array(10000).join('x'))
        );

        if (validationErrors && validationErrors['maxlength']) {
          return validationErrors['maxlength']['requiredLength'];
        }
      }
    }

    return null;
  }
}
