import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Phone } from "../../domain/index";

@Component({
  moduleId: module.id,
  selector: 'phone-editor',
  templateUrl: 'phone-editor.component.html',
  styleUrls: ['phone-editor.component.css']
})
export class PhoneEditorComponent implements OnInit {
  private newPhone = new Phone();

  phonesValue: Phone[]
  @Output()
  phonesChange = new EventEmitter<Phone[]>()

  @Input()
  get phones() {
    return this.phonesValue;
  }

  set phones(value) {
    this.phonesValue = value;
    this.phonesChange.emit(this.phones)
  }

  constructor() { }

  ngOnInit() {
  }

  addPhone() {
    this.phonesValue = this.phonesValue || [];
    this.phonesValue.push(this.newPhone);
    this.newPhone = {};
    this.phonesChange.emit(this.phones)
  }

  clearList() {
    this.phones = [];
  }
}