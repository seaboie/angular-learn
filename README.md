# Tutorial

## On Youtube

[Angular 18 Full Course (part 11) - Complete Zero to Hero Angular 18 full Tutorial](https://www.youtube.com/watch?v=1YXHx24Ohqs&list=PLG6SdLSnBhdWj797VAEvABNYIBEaVQnfF&index=20)  

## 🛠️ 🛠️ 🛠️ @empty : @for & @empty

### [Providing a fallback for `@for` blocks with the `@empty` block](https://angular.dev/guide/templates/control-flow#providing-a-fallback-for-for-blocks-with-the-empty-block)  

### [Angular 18 Full Course (Part 12) - Complete Zero to Hero Angular 18 full Tutorial](https://www.youtube.com/watch?v=Dbu__pRA1lk&list=PLG6SdLSnBhdWj797VAEvABNYIBEaVQnfF&index=20)  


```html
@for (item of items; track item.name) {
  <li> {{ item.name }}</li>
} @empty {
  <li aria-hidden="true"> There are no items. </li>
}
```  
> ts

```ts
@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  index: number = 0;
  count: number = 0;
  
  usersObj: Array<User> = [];

  constructor() {
    this.count = this.usersObj.length;
  }

  addNewUser() {
    let user: User = {id: 5, name: 'User 1', email: 'user1@gmail.com'};
    this.usersObj.push(user);
    this.count = this.usersObj.length;
  }

  onDelete(user: User) {
    this.index = this.usersObj.indexOf(user);
    this.usersObj.splice(this.index, 1);
    this.count = this.usersObj.length;
  }

  deleteFromIndex(index: number) {
    this.usersObj.splice(index, 1);
    this.count = this.usersObj.length;
    
  }
}

interface User {
  id: number;
  name: string;
  email: string;
}
```  
> html
```html
<div class=" p-20">

    <h1 class="font-semibold text-2xl">*ngFor : loading array object</h1>

    <div *ngIf="usersObj.length == 0">
        <p>- *ngIf : No users to display</p>
    </div>

    <ul>
        <li *ngFor="let user of usersObj; let i = index; let c = count">Count is : {{c}} , Index is {{i}} :
            {{user.name}} <button class="btn-primary" (click)="onDelete(user)">Delete</button>
        </li>
    </ul>
    <hr>

    <h1 class="font-semibold text-2xl">&#64;for : loading array object : Get $index</h1>
    <h2>Count all array is : {{count}}</h2>

    <ul>
        @for (user of usersObj; track user.id; let i = $index, e = $even, c = $count) {
        <li>{{ c }} {{ i }} {{ user.name }} <button class="btn-primary" (click)="deleteFromIndex(i)">Delete</button>
        </li>
        } @empty {
        <li>- &#64;There are no users</li>
        }
    </ul>

    <hr>

    <button class="btn-primary" (click)="addNewUser()">Add New User</button>

</div>
```  
