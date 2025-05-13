# Tutorial

## On Youtube

[Angular 18 Full Course (part 7) - Complete Zero to Hero Angular full Tutorial](https://www.youtube.com/watch?v=R3y1FvJihUE&list=PLG6SdLSnBhdWj797VAEvABNYIBEaVQnfF&index=24)

## 🛠️ 🛠️ 🛠️ ngIf & @if & @else Number

> ts

```ts
@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  loginCount: number = 0;
  
  countLoginAttempts() {
    this.loginCount!++;
  }

  resetLoginAttempts() {
    this.loginCount = 0;
  }
}
```

> html

```html
<<div class=" p-20">
    <h1 class="font-semibold text-2xl">Number Conditions : *ngIf</h1>
    <h2 *ngIf="loginCount < 4">{{loginCount}}</h2>

    <button class="btn-primary" (click)="countLoginAttempts()" [disabled]="loginCount > 3">Log In</button>

    <h4 *ngIf="loginCount > 3">Exceeded 3 login Attempts !!! Try again later</h4>
    <button class="btn-primary" (click)="resetLoginAttempts()" *ngIf="loginCount > 3">Reset</button>

    <hr>
    <!--  @if, @else if-->
    <h1 class="font-semibold text-2xl">Number Conditions : &#64;if</h1>

    @if (loginCount < 4) {
        <button class="btn-primary" (click)="countLoginAttempts()">Login Syntax</button>
    } @else {
        <button class="btn-primary" disabled>Login SynTax</button>
    }

    @if (loginCount > 3) {
        <h4>Exceeded 3 login Attempts !!! Try again later</h4>
    }
</div>
```
