import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services';
import { Observable } from 'rxjs';
import { User } from 'src/app/model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnInit {

  currentUsers: User[];
  users: User[];
  curPage = 1;
  perPage = 10;

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.filterUsers();
    });
  }

  filterUsers() {
    this.currentUsers = this.users.slice(Math.max(this.curPage - 1, 0) * this.perPage, this.curPage * this.perPage);
  }

  trackByFn(_: number, user: User) {
    return user.id;
  }

}
