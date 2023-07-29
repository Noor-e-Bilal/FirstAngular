import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private _Users = ['Noor-e-Bilal', 'Usman', 'admin'];
  constructor() {}

  get Users() {
    return this._Users;
  }
}
