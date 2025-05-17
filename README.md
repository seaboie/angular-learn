# Tutorial

## On Youtube

[Angular 18 Full Course (part 15) - Complete Zero to Hero Angular 18 full Tutorial](https://www.youtube.com/watch?v=J6Lqzwakw2o&list=PLG6SdLSnBhdWj797VAEvABNYIBEaVQnfF&index=15)  


## 🛠️ 🛠️ 🛠️   @Output()

### Get data from parent

> app.component.ts

```ts
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
```  

> app.component.html

```html
<app-posts-list (messageEventOutput)="reciveMessage($event)" />

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

  parentMessage: string = 'Message from the child using : Click Event';

  // @Output()
  @Output() messageEventOutput = new EventEmitter();

  sendMessage() {
    this.messageEventOutput.emit(this.parentMessage);
  }
}
```  

> posts-list.component.html  

```html
<p>posts-list works!</p>

<button class="btn-primary" (click)="sendMessage()">Send Message To Parent</button>
```  



