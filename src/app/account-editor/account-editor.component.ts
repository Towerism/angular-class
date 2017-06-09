import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'account-editor',
  templateUrl: 'account-editor.component.html',
  styleUrls: ['account-editor.component.css']
})
export class AccountEditorComponent {
  user: any
  departments: { id: number, name: string }[]
  
  _temp = { phone: {} }

  constructor() {
    this.user = {
      name: 'Martin',
      phones: [
        { type: 'mobile', number: '214-755-8663' },
        { type: 'fax', number: '214-555-5555' },
      ]
    }

    this.departments = [
      { id: 1, name: 'HR' },
      { id: 2, name: 'Marketing' },
      { id: 3, name: 'IT' },
      { id: 4, name: 'Accounting' }
    ]
  }

  addPhone() {
    this.user.phones.push(this._temp.phone);
    this._temp.phone = {};
  }
}