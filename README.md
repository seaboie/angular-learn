# Tutorial

## On Youtube

[Angular 18 Full Course (part 9) - Complete Zero to Hero Angular full Tutorial](https://www.youtube.com/watch?v=m2z04vfaseg&list=PLG6SdLSnBhdWj797VAEvABNYIBEaVQnfF&index=22)  
[Angular 18 Full Course (part 10) - Complete Zero to Hero Angular 18 full Tutorial](https://www.youtube.com/watch?v=eBYok6IdIxw&list=PLG6SdLSnBhdWj797VAEvABNYIBEaVQnfF&index=22)  

## 🛠️ 🛠️ 🛠️ ngFor , @for : Array Object

> ts

```ts
@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // users: Array<string> = ["John", "Sam", "Smith", "Jenifer"];
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

    <ul>
        <li *ngFor="let user of usersObj">{{user.email}}</li>
    </ul>
    <hr>

    <h1 class="font-semibold text-2xl">&#64;for : loading array object</h1>

    <ul>
        @for (user of usersObj; track user.id) {
            <li>{{user.email}}</li>
        }
    </ul>

</div>
```  

