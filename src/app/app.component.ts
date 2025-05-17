import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostsListComponent } from './widgets/posts-list/posts-list.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, PostsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  messageFromChild: string = '';

  reciveMessage(message: string) {
    this.messageFromChild = message;
  }
}
