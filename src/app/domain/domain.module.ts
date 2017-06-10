import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from "angular-in-memory-web-api";

import { MockApiService } from './mock-api.service';
import { UserRepository } from './api/user-repository.service';

@NgModule({
  imports: [
    HttpModule,
    InMemoryWebApiModule.forRoot(MockApiService),
  ],
  providers: [
    UserRepository
  ]
})
export class DomainModule { }
