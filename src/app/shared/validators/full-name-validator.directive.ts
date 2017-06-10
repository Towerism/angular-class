import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from "@angular/forms";

@Directive({
  selector: '[fullName][ngModel]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: FullNameValidator, multi: true }
  ]
})
export class FullNameValidator implements Validator {
  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    let isValid = new RegExp('^[A-z]+ [A-z\']+$').test(control.value);
    return isValid ? null : { 'fullName': true };
  }
}