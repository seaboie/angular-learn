import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-posts-list',
  imports: [],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css'
})
export class PostsListComponent {
  @Input() postListTitle: string = '';
  @Input() postIsLogin: boolean = false;
}
