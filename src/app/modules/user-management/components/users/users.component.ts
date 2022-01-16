import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { UserConstant } from '../../constants/user';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users: User[] = [];
  public entityListing = UserConstant.entityList;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUserFactory();
  }

  public onUsersUpdated(users: User[]): void {    // set user beheviour subject to share user list in variours component
    this.userService.usersUpdated.next(users);
  }

  private getUserFactory(): void {        // to fetch user json 
    this.userService.getUserFactory().subscribe((users: any) => {
      this.users = users;
      this.userService.usersUpdated.next(users);
    });
  }
}
