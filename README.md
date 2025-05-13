# Tutorial

## On Youtube

[Angular 18 Full Course (part 9) - Complete Zero to Hero Angular full Tutorial](https://www.youtube.com/watch?v=m2z04vfaseg&list=PLG6SdLSnBhdWj797VAEvABNYIBEaVQnfF&index=22)

## 🛠️ 🛠️ 🛠️ ngFor , @for : Array

> ts

```ts
@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users: Array<string> = ["John", "Sam", "Smith", "Jenifier"];
}
```

> html

```html
<div class=" p-20">
    <h1 class="font-semibold text-2xl">*ngFor="" </h1>

    <h2 *ngFor="let user of users">{{user}}</h2>

    <hr>
    <ul>
        <li *ngFor="let user of users">{{user}}</li>
    </ul>
    <hr>

    <h1 class="font-semibold text-2xl">&#64;for </h1>

    @for (user of users; track user) {
        <h3>{{user}} - loading use &#64;for</h3>
    }

    <hr>
    <ul>
        @for (user of users; track user) {
            <li>{{user}}</li>
        }
    </ul>

</div>
```  

