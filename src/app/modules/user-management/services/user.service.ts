import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public usersUpdated: BehaviorSubject<any> = new BehaviorSubject([]);
  constructor(private http: HttpClient) { }

  public getUserFactory() {
    return this.http.get('assets/json-factory/user.json');  // to fetch user json
  }
}
