# Tutorial

## On Youtube

[Angular 18 Full Course (Part 17) - Complete Zero to Hero Angular 18 full Tutorial](https://www.youtube.com/watch?v=coqU17HJfL8&list=PLG6SdLSnBhdWj797VAEvABNYIBEaVQnfF&index=13)  


## 🛠️ 🛠️ 🛠️  Ng Component outlet
### display component by Injector : `constructor(private viewContainer: ViewContainerRef) {}`



> app.component.ts

```ts
@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, PostsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  constructor(private viewContainer: ViewContainerRef) {}
  loadComponent() {
    this.viewContainer.createComponent(PostsListComponent);
  }

  removeComponent() {
    this.viewContainer.remove();
  }
}
```  

> app.component.html

```html
<app-posts-list />

<button class="btn-primary" (click)="loadComponent()">Load Post list component</button>
<button class="btn-primary" (click)="removeComponent()">Remove Component</button>
```



