import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostsListComponent } from './widgets/posts-list/posts-list.component';
import { CardComponent } from "./widgets/card/card.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, PostsListComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @ViewChild(PostsListComponent) childMessage: any;
  message: string = '';
  messageFromChild: string = '';
  messageChild: any;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {

    this.message = this.childMessage.childMessage;
    this.messageChild = this.childMessage.postCount;
    console.log(this.childMessage);
    // Use ::: ChangeDetectorRef , to solved : ERROR RuntimeError: NG0100: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked.
    // Solved in ::: constructor(private changeDetectorRef: ChangeDetectorRef) {}
    this.changeDetectorRef.detectChanges();

  }

  reciveMessage(message: string) {
    this.messageFromChild = message;
  }
}
