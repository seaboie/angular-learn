import { Component } from '@angular/core';
import { UserInterface, UserService } from '../../services/user/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  userService: any;
  users: UserInterface[] = [];

  constructor(private userServiceDependencyInjection: UserService) {
    this.userService = userServiceDependencyInjection;
    this.users = this.userService.users;
  }
}
