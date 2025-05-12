# Tutorial

## On Youtube

[Angular 18 Full Course (part 6) - Complete Zero to Hero Angular full Tutorial](https://www.youtube.com/watch?v=GW7ophQPm9c&list=PLG6SdLSnBhdWj797VAEvABNYIBEaVQnfF&index=26)

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

  isAdmin: boolean = true;
  isMember: boolean = false;
  isGuest: boolean = false;

  userName: string = 'John Doe';
}
```

> html

```html
<div class=" p-20">
  <h1 class="font-semibold text-2xl">Multiple Conditions</h1>

  <h4 *ngIf="isAdmin">Welcome Admin</h4>

  <ng-template #adminMessage>
    <h4 *ngIf="isAdmin; else memberMessage">Welcome Admin</h4>
  </ng-template>
  <ng-template #memberMessage>
    <h4 *ngIf="isMember; else guestMessage">Welcome Member</h4>
  </ng-template>
  <ng-template #guestMessage>
    <h4 *ngIf="isGuest; else adminMessage ">Welcome Guest</h4>
  </ng-template>

  <hr />

  <!-- @if, @else -->

  @if (isAdmin) {
  <h4>Welcome Admin</h4>
  } @else if (isMember) {
  <h4>Welcome Member</h4>
  } @else if (isGuest) {
  <h4>Welcom Guest</h4>
  }
</div>
```
