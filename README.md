# Tutorial

## On Youtube

[Angular 18 Full Course (part 13) - Complete Zero to Hero Angular 18 full Tutorial](https://www.youtube.com/watch?v=Dbu__pRA1lk&list=PLG6SdLSnBhdWj797VAEvABNYIBEaVQnfF&index=21)  


## 🛠️ 🛠️ 🛠️   Class binding & ngClass

[Class and style binding](https://v17.angular.io/guide/class-binding)  

> css

```css
.login {
    font-size: 48px;
    color: green;
    text-transform: uppercase;
}

.logout {
    font-size: 48px;
    color: red;
    text-transform: lowercase;
}

.one {
    text-decoration: line-through;
}

.two {
    background-color: red;
}

.three {
    font-size: 48px;
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
  isLoggedIn: boolean = true;

  classExpression = ['one', 'two', 'three'];
}
```

> html

```html
<div class=" p-20">

    <!-- Direct to class css -->
    <h1 [class.login]="isLoggedIn">Class Binding</h1>
    
    <!-- Condition to get class css -->
    <h1 [class]="isLoggedIn ? 'logout' : 'login'">Class Binding</h1>

    <!-- Array<string> multiple class css-->
    <h1 [class]="classExpression">Array String</h1>

    <hr>

    <!-- ngClass condition ( use Object ) -->
    <h1 [ngClass]="{
        'login': isLoggedIn, 
        'logout': !isLoggedIn
        }">
    Ng Class Directive
    </h1>

</div>
```  


