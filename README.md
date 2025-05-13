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

  userRole: string = "Member";
}
```

> html

```html
<div class=" p-20">
    <h1 class="font-semibold text-2xl">String Conditions : *ngIf</h1>
    
    <h4 *ngIf="userRole == 'Admin'; else memberMessage">Welcome Admin</h4>
    <ng-template #memberMessage>
        <h4>Welcome Member</h4>
    </ng-template>

    <!-- @if , @else -->
     <hr>

     @if (userRole == 'Admin') {
        <h4>Welcome Admin</h4>
     } @else if (userRole == 'Member') {
        <h4>Welcome Member</h4>
     }

</div>
```
