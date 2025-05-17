import { CommonModule, NgComponentOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostsListComponent } from './widgets/posts-list/posts-list.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, PostsListComponent, NgComponentOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  loadComponent() {
    return PostsListComponent;
  }
}
