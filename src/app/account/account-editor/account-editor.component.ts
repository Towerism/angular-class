import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  moduleId: module.id,
  templateUrl: 'account-editor.component.html',
  styleUrls: ['account-editor.component.css']
})
export class AccountEditorComponent implements OnInit {
  user: any
  departments: { id: number, name: string }[] = [
    { id: 1, name: 'HR' },
    { id: 2, name: 'Marketing' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Accounting' }
  ];
  
  _temp = { phone: {} }

  constructor(private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(x => this.loadRoute(x))
  }

  loadRoute(params: any) {
    //TODO: Load from repository
    if (params.id) {
      this.user = {
        name: 'Martin',
        phones: [
          { type: 'mobile', number: '214-755-8663' },
          { type: 'fax', number: '214-555-5555' },
        ]
      }
    } else {
      this.user = { phones: [] };
    }
  }

  addPhone() {
    this.user.phones.push(this._temp.phone);
    this._temp.phone = {};
  }

  save() {
    //TODO: Save
    this.router.navigateByUrl('accounts');
  }
}