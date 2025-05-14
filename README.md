# Tutorial

## On Youtube

[Angular 18 Full Course (part 9) - Complete Zero to Hero Angular full Tutorial](https://www.youtube.com/watch?v=m2z04vfaseg&list=PLG6SdLSnBhdWj797VAEvABNYIBEaVQnfF&index=22)  
[Angular 18 Full Course (part 10) - Complete Zero to Hero Angular 18 full Tutorial](https://www.youtube.com/watch?v=eBYok6IdIxw&list=PLG6SdLSnBhdWj797VAEvABNYIBEaVQnfF&index=22)

## 🛠️ 🛠️ 🛠️ Insert and Delete  

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
  usersObj: Array<User> = [
    {
      id: 1,
      name: "John",
      email: "john@gmail.com"
    },
    {
      id: 2,
      name: "Smith",
      email: "smith@gmail.com"
    },
    {
      id: 3,
      name: "Sam",
      email: "sam@gmail.com"
    },
    {
      id: 4,
      name: "Jenifer",
      email: "jenifer@gmail.com"
    }
  ];

  addNewUser() {
    let user: User = {id: 5, name: 'User 1', email: 'user1@gmail.com'};
    this.usersObj.push(user);
  }

  onDelete(user: User) {
    this.index = this.usersObj.indexOf(user);
    this.usersObj.splice(this.index, 1);
  }

  deleteFromIndex(index: number) {
    this.usersObj.splice(index, 1);
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
    <h1 class="font-semibold text-2xl">*ngFor="" : loading array object</h1>
    <h2>Index is {{index}}</h2>

    <hr>
    <h3>- Ng For</h3>
    <ul>
        <li *ngFor="let user of usersObj">{{user.name}} <button class="btn-primary" (click)="onDelete(user)">Delete</button></li>
    </ul>

    <hr>
    <!-- - Get index from *ngFor loop -->
    <h3>- Get index from *ngFor loop</h3>
    <ul>
        <li *ngFor="let user of usersObj; let i = index;">{{i}} {{user.name}} <button class="btn-primary" (click)="deleteFromIndex(i)">Delete index</button></li>
    </ul>
    <hr>

    <h1 class="font-semibold text-2xl">&#64;for : loading array object</h1>

    <ul>
        @for (user of usersObj; track user.id) {
            <li>{{user.name}}</li>
        }
    </ul>

    <button class="btn-primary" (click)="addNewUser()">Add New User</button>

</div>
```

## Get index from \*ngFor loop
`<li *ngFor="let user of usersObj; let i = index;">...</li>`  

```html
<ul>
  <li *ngFor="let user of usersObj; let i = index;">{{i}} {{user.name}} <button class="btn-primary" (click)="deleteFromIndex(i)">Delete index</button></li>
</ul>
```
