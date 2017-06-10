import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'
import { User } from './models/user';

@Injectable()
export class MockApiService implements InMemoryDbService {

  mock: any = {
    users: [
      {
        id: 1,
        name: "John Lawrimore",
        email: "jlawrimore@smu.edu",
        phones: [
          { number: '2145551212', type: 'mobile' },
          { number: '9725551212', type: 'home' },
          { number: '8175551212', type: 'fax' }
        ]
      },
      {
        id: 2,
        name: "Joe Smith",
        email: "jsmith@smu.edu",
        phones: [
          { number: '2145551212', type: 'mobile' },
          { number: '9725551212', type: 'home' },
          { number: '8175551212', type: 'fax' }
        ]
      },
      {
        id: 3,
        name: "Tom Jones",
        email: "tjones@smu.edu",
        phones: [
          { number: '2145551212', type: 'mobile' },
          { number: '9725551212', type: 'home' },
          { number: '8175551212', type: 'fax' }
        ]
      }
    ]
  };

  createDb(): any {
    return this.mock;
  }
}