import { UsersService } from './users.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  Users;
  totalUser = 0;
  constructor(service: UsersService) {
    this.Users = service.Users;
    this.totalUser = this.Users.length;
  }
}
