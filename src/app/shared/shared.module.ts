import { FullNameValidator } from './validators/full-name-validator.directive';
import { NgModule } from '@angular/core';

import { PhonePipe } from "./pipes/phone.pipe";

@NgModule({
  providers: [
    PhonePipe,
    FullNameValidator
  ],
  declarations: [
    PhonePipe,
    FullNameValidator
  ],
  exports: [
    PhonePipe,
    FullNameValidator
  ]
})
export class SharedModule { }
