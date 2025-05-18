# Tutorial

## On Youtube

[Angular 18 Full Course (Part 17) - Complete Zero to Hero Angular 18 full Tutorial](https://www.youtube.com/watch?v=coqU17HJfL8&list=PLG6SdLSnBhdWj797VAEvABNYIBEaVQnfF&index=13)  


## 🛠️ 🛠️ 🛠️  ngOnChange
### Trigger when `@Input()` property change



> profile.component.ts

```ts
@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnChanges {
  @Input() inputUsername: string = '';
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges Triggers'); 
  }
  
}
```  

> profile.component.html

```html
<p>profile works!</p>
<h1>{{inputUsername}}</h1>
```  

> app.component.ts

```ts
@Component({
  selector: 'app-root',
  imports: [CommonModule, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  userName: string = 'John Doe';
  changeUsername() {
    this.userName = 'John Smith';
  }
}
```  

> app.component.html

```html
<app-profile [inputUsername]="userName"></app-profile>

<button class="btn-primary" (click)="changeUsername()">Change Username</button>
```  




