import { AccountListComponent } from './account-list/account-list.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AccountEditorComponent } from './account-editor/account-editor.component';

const routes: Routes = [
  { path: 'accounts', component: AccountListComponent },
  { path: 'accounts/new', component: AccountEditorComponent },
  { path: 'accounts/:id', component: AccountEditorComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AccountEditorComponent, AccountListComponent]
})
export class AccountModule { }
