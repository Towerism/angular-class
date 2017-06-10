import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { Observable } from "rxjs/Observable";
import { User } from './../models/user';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class UserRepository {
  url = 'api/users';

  constructor(private http: Http) { 
  }

  search(search?: string): Observable<User[]> {
    return this.http
      .get(this.url, { search })
      .map(x => this.extractData(x))
      .catch(x => this.handleError(x));
  }

  getById(id: number): Observable<User> {
    return this.http
      .get(`${this.url}/${id}`)
      .map(x => this.extractData(x))
      .catch(x => this.handleError(x));
  }

  add(user: User): Observable<User> {
    return this.http
      .post(this.url, user)
      .map(x => this.extractData(x))
      .catch(x => this.handleError(x))
  }

  update(user: User): Observable<User> {
    return this.http
      .post(`${this.url}/${user.id}`, user)
      .map(x => this.extractData(x))
      .catch(x => this.handleError(x))
  }

  delete(id: number): Observable<{}> {
    return this.http
      .delete(`${this.url}/${id}`)
      .catch(x => this.handleError(x))
  }

  private extractData(response: Response) {
    let json = response.json();
    return json ? json.data : undefined;
  }

  private handleError(error: any) {
    return Observable.throw(error.message);
  }
}