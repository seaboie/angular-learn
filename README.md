# Tutorial

## On Youtube

[Angular 18 Full Course (part 15) - Complete Zero to Hero Angular 18 full Tutorial](https://www.youtube.com/watch?v=J6Lqzwakw2o&list=PLG6SdLSnBhdWj797VAEvABNYIBEaVQnfF&index=15)  


## 🛠️ 🛠️ 🛠️   @ViewChild(ChildComponent) childProperty: Type

### Get data from child

> app.component.ts

```ts
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
```  

> app.component.html

```html
<app-posts-list/>

<p>{{message}}</p>
<p>{{messageCount}}</p>
<p>{{messageFromChild}}</p>
```

> posts-list.component.ts

```ts
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
```  

> posts-list.component.html  

```html
<p>posts-list works!</p>

<button class="btn-primary">Send Message To Parent</button>
```  
- Use `@ViewChild(PostsListComponent) childMessage!: ChildInterface;` get data with `childMessage`  
- Use `ngAfterViewInit(): void {}` method for get data from child  
- Solved Error: 
  - Use ::: ChangeDetectorRef , to solved : ERROR RuntimeError: NG0100: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked.  
  - Solved in ::: constructor(private changeDetectorRef: ChangeDetectorRef) {}  

```ts
constructor(private changeDetectorRef: ChangeDetectorRef) {}
```  

```ts
ngAfterViewInit(): void {

    this.message = this.childMessage.childMessage;
    this.messageCount = this.childMessage.postCount;
    this.messageFromChild = this.childMessage.childToParentMessage;
    console.log(this.childMessage);
    // Use ::: ChangeDetectorRef , to solved : ERROR RuntimeError: NG0100: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked.
    // Solved in ::: constructor(private changeDetectorRef: ChangeDetectorRef) {}
    this.changeDetectorRef.detectChanges();

}
```  


