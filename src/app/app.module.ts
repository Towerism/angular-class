import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { AccountEditorComponent } from './account-editor/account-editor.component';

@NgModule({
  imports: [BrowserModule, FormsModule ],
  declarations: [AppComponent, AccountEditorComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
