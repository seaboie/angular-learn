# Tutorial

## On Youtube  
**[Angular Full Course (Part 23) - Angular 18 Services](https://www.youtube.com/watch?v=Ph6eqQU2O3c&list=PLG6SdLSnBhdWj797VAEvABNYIBEaVQnfF&index=6)**  

**[Angular Full Course (Part 24) - Angular Services](https://www.youtube.com/watch?v=9Nkzl0H8hmI&list=PLG6SdLSnBhdWj797VAEvABNYIBEaVQnfF&index=6)**  


## 🛠️ 🛠️ 🛠️  Services & Dependency Injection    

### Command line to create `pipe` file  
```bash
ng g s services/user/user
```  

> user.service.ts  

```ts
import { Injectable } from '@angular/core';

export interface UserInterface {
  name: string;
  age: number;
  email: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: UserInterface[] = [
    {name: 'John Doe', age: 30, email: 'john@doe.com'},
    {name: 'John Smith', age: 24, email: 'john@smith.com'},
    {name: 'Liza Ann', age: 50, email: 'liza@ann.com'},
    {name: 'Sam Smith', age: 43, email: 'sam@smith.com'}
  ]

  constructor() { 
    console.log('User service new instance created !!!!!!!');
  }
}
```  

> app.component.ts

```ts
@Component({
  selector: 'app-root',
  imports: [CommonModule, PostsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  userService: any;
  users: UserInterface[] = [];

  constructor(private userServiceDependencyInjection: UserService) {
   this.userService = userServiceDependencyInjection;
   this.users = this.userService.users;
   
  }
}
```  

---  

> app.component.html

```html
<div class="p-4">

    <app-posts-list></app-posts-list>

    <hr>
    <h1>- Come from AppComponent</h1>
    <h1>{{users | json}}</h1>

    <hr>
    
    <h1 *ngFor="let user of users">{{user.name}}</h1>

</div>
```  

