import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserInterface, UserService } from './services/user/user.service';
import { PostsListComponent } from "./widgets/posts-list/posts-list.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, PostsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  userService: any;
  users: UserInterface[] = [];

  constructor(private userServiceDependencyInjection: UserService) {
   this.userService = userServiceDependencyInjection;
   this.users = this.userService.users;
   
  }
}
