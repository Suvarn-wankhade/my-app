import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { UserService } from '../../services/user.service';
import { User } from '../../models/user';


@Component({
  selector: 'app-progress-calculation',
  templateUrl: './progress-calculation.component.html',
  styleUrls: ['./progress-calculation.component.scss']
})
export class ProgressCalculationComponent implements OnInit {

  public progress: number = 0;

  private users: User[] = [];
  private usersSubscriber: Subscription = new Subscription;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUpdatedUsers();
  }

  ngOnDestroy(): void {      // unsubscribe user beheviour subject
    if (this.usersSubscriber) {
      this.usersSubscriber.unsubscribe();
    }
  }

  private getUpdatedUsers(): void {        // to progress calculation as per updated user list
    this.usersSubscriber = this.userService.usersUpdated.subscribe((users: User[]) => {
      if (users) {
        this.users = users;
        if (this.users.length >= 10) {
          this.progress = 100;
        } else {
          this.progress = this.users.length * 10;
        }
      }
    });
  }
}
