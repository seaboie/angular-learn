# Tutorial

## On Youtube

[Angular 18 Full Course (part 14) - Complete Zero to Hero Angular 18 full Tutorial](https://www.youtube.com/watch?v=mF5md9e64O8&list=PLG6SdLSnBhdWj797VAEvABNYIBEaVQnfF&index=16)  


## 🛠️ 🛠️ 🛠️   @Input()

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
  appPostTitle: string = 'Post 1';
  appIsLogin: boolean = false;
}
```  

> app.component.html

```html
<h1>{{ appPostTitle }}</h1>
<app-posts-list [postListTitle]="appPostTitle" [postIsLogin]="appIsLogin" />
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
  @Input() postListTitle: string = '';
  @Input() postIsLogin: boolean = false;
}
```  

> posts-list.component.html  

```html
<p>posts-list works!</p>
<p>Get value from AppComponent : parent : {{ postListTitle }}</p>

@if (postIsLogin) {
    <p>Get True</p>
} @else {
    <p>Get False</p>
}

```  



