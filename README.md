# Tutorial

## On Youtube

[Angular 18 Full Course (Part 17) - Complete Zero to Hero Angular 18 full Tutorial](https://www.youtube.com/watch?v=coqU17HJfL8&list=PLG6SdLSnBhdWj797VAEvABNYIBEaVQnfF&index=13)  


## 🛠️ 🛠️ 🛠️  Ng Component outlet
### display component by `*ngComponentOutlet=""`   

### `<ng-content select="[header]"></ng-content>`  


> app.component.ts

```ts
@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, PostsListComponent, NgComponentOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  loadComponent() {
    return PostsListComponent;
  }
}
```  

> app.component.html

```html
<app-posts-list />
<div *ngComponentOutlet="loadComponent()"></div>
```



