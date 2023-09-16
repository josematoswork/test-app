import { InjectionToken } from '@angular/core';

export const DEFAULT_ERRORS_FACTORY = {
  required: () => 'This field is required.',
  minlength: ({ requiredLength }: { requiredLength: number }) =>
    `Enter at least ${requiredLength} character${
      requiredLength === 1 ? '' : 's'
    }.`,
  maxlength: ({ requiredLength }: { requiredLength: number }) =>
    `Enter no more than ${requiredLength} character${
      requiredLength === 1 ? '' : 's'
    }.`,
  pattern: ({ requiredPattern }: { requiredPattern: string }) =>
    `Please match the required pattern: ${requiredPattern}.`,
  min: ({ min }: { min: number }) =>
    `Value must be greater than or equal to ${min}.`,
  max: ({ max }: { max: number }) =>
    `Value must be less than or equal to ${max}.`,
  email: () => 'Please enter a valid email address.',
  invalidUrl: () => 'Please enter a valid URL.',
};

export const FORM_ERROR_PROVIDER = new InjectionToken('FORM_ERROR_PROVIDER', {
  providedIn: 'root',
  factory: () => DEFAULT_ERRORS_FACTORY,
});
