# Tutorial  

## On Youtube  
[Angular 18 Full Course (part 6) - Complete Zero to Hero Angular full Tutorial](https://www.youtube.com/watch?v=NFfm6537XBc&list=PLG6SdLSnBhdWj797VAEvABNYIBEaVQnfF&index=26)  

## 🛠️ 🛠️ 🛠️ ngIf & @if & @else

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
    <h2 *ngIf="isLoggedIn">{{ userName }} : come from [ *ngIf ]</h2>
    <h4 *ngIf="!isLoggedIn">User is not logged in</h4>

    <hr>


    <!-- @if -->
     @if (isLoggedIn) {
        <h2>{{ userName }}</h2>
     } @else {
        <h2>Please : Log in</h2>
     }

</div>
```  

