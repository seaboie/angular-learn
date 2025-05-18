import { CommonModule } from '@angular/common';
import { Component, ViewContainerRef } from '@angular/core';
import { ProfileComponent } from './widgets/profile/profile.component';
import { PostsListComponent } from './widgets/posts-list/posts-list.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private viewContainer: ViewContainerRef) {}

  userName: string = 'John Doe';
  changeUsername() {
    this.userName = 'John Smith';
  }

  loadProfileComponent() {
    this.viewContainer.createComponent(ProfileComponent);
  }

  removeProfileComponent() {
    this.viewContainer.remove();
  }
}
