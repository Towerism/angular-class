import { UserRepository } from './../../domain/api/user-repository.service';
import { Component, OnInit } from '@angular/core';
import { User } from './../../domain/index';

@Component({
  moduleId: module.id,
  templateUrl: 'account-list.component.html',
  styleUrls: ['account-list.component.css']
})
export class AccountListComponent implements OnInit {
  users: User[];

  constructor(private userRepository: UserRepository) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userRepository
      .search()
      .subscribe(users => this.users = users);
  }

  deleteUser(user: User) {
    this.userRepository
      .delete(user.id)
      .first().subscribe(x => this.onDelete());
  }

  onDelete() {
    console.log('User deleted!')
    this.loadUsers();
  }
}