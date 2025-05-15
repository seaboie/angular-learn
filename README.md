# Tutorial

## On Youtube

[Angular 18 Full Course (part 12) - Complete Zero to Hero Angular 18 full Tutorial](https://www.youtube.com/watch?v=Dbu__pRA1lk&list=PLG6SdLSnBhdWj797VAEvABNYIBEaVQnfF&index=21)  


## 🛠️ 🛠️ 🛠️   Style binding

[Class and style binding](https://v17.angular.io/guide/class-binding)  


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

  // style variable
  navStyle = 'font-size: 2.2rem; color: cornflowerblue; font-weight: bold';
  navStyles = 'font-size: 4.2rem; color: cornflowerblue; font-weight: bold';

  // style object variable
  objectVariable = {'font-size': this.isLoggedIn ? '32px' : '18px', 'color': this.isLoggedIn ? 'blue' : 'green'}
}
```

> html

```html
<div class=" p-20">

    <h1 
        [style.color]="isLoggedIn ? 'green' : 'red'" 
        [style.textTransform]="isLoggedIn ? 'uppercase' : 'lowercase'"
        [style.fontSize]="isLoggedIn ? '34px' : '56px'"
        >
        Single Style
    </h1>

        <!-- multiple style with variable -->
    <h1 
        [style]="isLoggedIn ? navStyles : navStyle"
    >
    Multiple Style with variable
    </h1>

    <hr>

    <h1 [ngStyle]="{
        'color': isLoggedIn ? 'green' : 'red',
        'textTransform': isLoggedIn ? 'uppercase' : 'lowercase',
        'fontSize': isLoggedIn ? '50px' : '18px'
        }"
    >
    Ng Style Directive
    </h1>

    <hr>

    <h1 [ngStyle]="objectVariable"
    >
    Ng Style Directive variable
    </h1>

</div>
```  