import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  public maleCount: number = 0;
  public femaleCount: number = 0;

  private users: User[] = [];
  private usersSubscriber: Subscription = new Subscription;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getUpdatedUsers();
  }

  ngOnDestroy(): void {
    if (this.usersSubscriber) {
      this.usersSubscriber.unsubscribe();     // unsubscribe user beheviour subject
    }
  }

  private getUpdatedUsers(): void {     // to update male and female user count as per the updated user list. 
    this.usersSubscriber = this.userService.usersUpdated.subscribe((users: User[]) => {
      if (users) {
        this.users = users;
        this.maleCount = this.users.filter((user: User) => user.gender === 'Male').length;
        this.femaleCount = this.users.filter((user: User) => user.gender === 'Female').length;
      }
    });
  }
}
