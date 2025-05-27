# Tutorial ...

## Two Way Data Binding  

- import `FormsModule`  
- In Template : use `[(ngModel)]="random"`  

> app.component.ts

```ts
@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  random: string = '';
}
```  

- `<input class="input-nice" type="text" [placeholder]="topic" [(ngModel)]="random">`  

> app.component.html

```html
<div class="grid place-items-center">
    <p class="text-xl">2. Two Way Data Binding</p>
    <input class="input-nice" type="text" [placeholder]="topic" [(ngModel)]="random">
    <p> {{ random }} </p>
    
</div>
```
