# Tutorial

## On Youtube

[Angular 18 Full Course (part 20) - Complete Zero to Hero Angular 18 full Tutorial](https://www.youtube.com/watch?v=rvIEW5pW7YQ&list=PLG6SdLSnBhdWj797VAEvABNYIBEaVQnfF&index=9)  


## 🛠️ 🛠️ 🛠️  Pipe


> app.component.ts

```ts
@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  title: string = 'angular app';
  num: number = 123456;

  constructor() {}

}
```  

> app.component.html  

```html
<h1>{{title | titlecase}}</h1>
<h1>{{title | uppercase}}</h1>
<h1>{{ num | currency }}</h1>
<h1>{{ num | percent }} </h1>
<h1>{{ 1234567.89 | number }}</h1>
```  

