import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-posts-list',
  imports: [CardComponent],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent {
  // @ViewChild
  childMessage: string = 'Hello From Child Component';
  postCount: number = 0;

  parentMessage: string = 'Message from the child using : Click Event';

  // @Output()
  @Output() messageEventOutput = new EventEmitter();

  sendMessage() {
    this.messageEventOutput.emit(this.parentMessage);
  }
}
