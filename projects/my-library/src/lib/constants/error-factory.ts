import { InjectionToken } from '@angular/core';

export const DEFAULT_ERRORS_FACTORY = {
  required: () => 'This field is required.',
  minlength: ({ requiredLength }: { requiredLength: number }) =>
    `Enter at least ${requiredLength} character${
      requiredLength === 1 ? '' : 's'
    }.`,
  invalidUrl: () => 'Please enter a valid URL.',
};

export const FORM_ERROR_PROVIDER = new InjectionToken('FORM_ERROR_PROVIDER', {
  providedIn: 'root',
  factory: () => DEFAULT_ERRORS_FACTORY,
});
