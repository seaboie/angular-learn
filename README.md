# Tutorial

## On Youtube

[Angular 18 Full Course (part 11) - Complete Zero to Hero Angular 18 full Tutorial](https://www.youtube.com/watch?v=1YXHx24Ohqs&list=PLG6SdLSnBhdWj797VAEvABNYIBEaVQnfF&index=20)  

## 🛠️ 🛠️ 🛠️ @for , *ngFor : Array object 

### [Contextual variables in @for blocks](https://angular.dev/guide/templates/control-flow#contextual-variables-in-for-blocks)  

Inside `@for` blocks, several implicit variables are always available:

| Variable | Meaning |
|---|---|
| `$count` | Number of items in a collection iterated over | 
| `$index` | Index of the current row | 
| `$first` | Whether the current row is the first row | 
| `$last` | Whether the current row is the last row| 
| `$even` | Whether the current row index is even | 
| `$odd` | Whether the current row index is odd | 

> ts

```ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  index: number = 0;
  count: number = 0;
  
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

    <h1 class="font-semibold text-2xl">&#64;for : loading array object : Get $index</h1>
    <h2>Count all array is : {{count}}</h2>

    <h1>-------</h1>

    <ul>
        @for (user of usersObj; track user.id; let i = $index, e = $even, c = $count, first = $first, last = $last, even = $even, odd = $odd) {
        <li>Odd is {{ odd }} : Even is {{ even }} : Last is {{ last }} : First is {{ first }} : Count is {{ c }} : Index is {{ i }} : Name is {{ user.name }}
            <button class="btn-primary" (click)="deleteFromIndex(i)">Delete</button></li>
        }
    </ul>

    <hr>

    <button class="btn-primary" (click)="addNewUser()">Add New User</button>

</div>
```  

## Get index from `@for`  

```html
@for (item of items; track item.id; let idx = $index, c = $count, e = $even, odd = $odd, first = $first, last = $last) {
  <p>Item #{{ idx }}: {{ item.name }}</p>
}
```  
