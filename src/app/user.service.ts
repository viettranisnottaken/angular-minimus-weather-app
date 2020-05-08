import { Injectable } from '@angular/core';

import { User } from './user.interface';
import { USERS } from './users.db';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  _users: User[] = [];

  constructor() {}

  signup(user: User) {
    USERS.push(user);
  }

  public get users(): User[] {
    this._users = USERS;
    return this._users;
  }

  public set users(users: User[]) {
    this._users = users;
  }
}
