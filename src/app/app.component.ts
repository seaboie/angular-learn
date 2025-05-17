import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostsListComponent } from './widgets/posts-list/posts-list.component';

interface ChildInterface {
  childMessage: string;
  postCount: number;
  childToParentMessage: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, PostsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @ViewChild(PostsListComponent) childMessage!: ChildInterface;
  
  message: string = '';
  messageCount: number = 0;
  messageFromChild: string = '';


  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {

    this.message = this.childMessage.childMessage;
    this.messageCount = this.childMessage.postCount;
    this.messageFromChild = this.childMessage.childToParentMessage;
    console.log(this.childMessage);
    // Use ::: ChangeDetectorRef , to solved : ERROR RuntimeError: NG0100: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked.
    // Solved in ::: constructor(private changeDetectorRef: ChangeDetectorRef) {}
    this.changeDetectorRef.detectChanges();

  }
}
