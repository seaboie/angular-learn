# Tutorial

## On Youtube

[Angular 18 Full Course (part 20) - Complete Zero to Hero Angular 18 full Tutorial](https://www.youtube.com/watch?v=rvIEW5pW7YQ&list=PLG6SdLSnBhdWj797VAEvABNYIBEaVQnfF&index=9)  


## 🛠️ 🛠️ 🛠️  Pipe Slice


> app.component.ts

```ts
@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  angular: string = 'Hello Angular';
  angularWorld: string = 'Hello Angular World';

}
```  

> app.component.html  

```html
<div class="p-4">
    <div>{{ angular | slice : 6 }}</div>
    <div>{{ angularWorld | slice : 6 : 16 }}</div>
</div>
```  

