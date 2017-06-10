import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { User, UserRepository } from "../../domain/index";

import 'rxjs/add/operator/first'

@Component({
  moduleId: module.id,
  templateUrl: 'account-editor.component.html',
  styleUrls: ['account-editor.component.css']
})
export class AccountEditorComponent implements OnInit {
  title: string;
  user: User;
  departments: { id: number, name: string }[] = [
    { id: 1, name: 'HR' },
    { id: 2, name: 'Marketing' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Accounting' }
  ];
  
  _temp = { phone: {} }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userRepository: UserRepository
  ) { }

  ngOnInit() {
    this.route.params.subscribe(x => this.loadRoute(x))
  }

  loadRoute(params: any) {
    if (params.id) {
      this.userRepository
        .getById(+params.id)
        .subscribe(x => this.loadUser(x));
    } else {
      this.loadUser(new User);
    }
  }

  loadUser(user: User) {
    this.user = user;
    this.title = user.id
      ? user.name
      : 'New User'

  }

  addPhone() {
    this.user.phones = this.user.phones || [];
    this.user.phones.push(this._temp.phone);
    this._temp.phone = {};
  }

  save() {
    if (this.user.id) {
      this.userRepository
        .update(this.user)
        .first().subscribe(x => this.onSave(x));
    } else {
      this.userRepository
        .add(this.user)
        .first().subscribe(x => this.onSave(x));
    }
  }

  onSave(user: User) {
    console.log('User saved!');
    this.router.navigateByUrl('accounts');
  }
}