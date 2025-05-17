import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-posts-list',
  imports: [],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent {
  // @ViewChild
  childMessage: string = 'Hello From Child Component';
  postCount: number = 1;
  childToParentMessage: string = 'Message from the child to parent';
}
