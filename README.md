# Tutorial  

## On Youtube  
[Angular 18 Full Course (part 6) - Complete Zero to Hero Angular full Tutorial](https://www.youtube.com/watch?v=NFfm6537XBc&list=PLG6SdLSnBhdWj797VAEvABNYIBEaVQnfF&index=26)  

## 🛠️ 🛠️ 🛠️ ng-template

> ts

```ts
@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isLoggedIn: boolean = false;
  userName: string = 'John Doe';
}
```

> html

```html
<div class=" p-20">
    <h1 class="font-semibold text-2xl">Structural Directive</h1>
    <!-- *ngIf="" : must import ngIf -->
    <h2 *ngIf="isLoggedIn else message">{{ userName }} : come from [ *ngIf ]</h2>

    <ng-template #message>
        <h4>User is not logged in ( Loaded using ng-template )</h4>
    </ng-template>

</div>
```  

- create `<ng-template>` Tag  
- defined `#message`  
- use `message` in `*ngIf` scope after `else`
