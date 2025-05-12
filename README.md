# Tutorial

## 🛠️ 🛠️ 🛠️ Two way Data Binding

> ts

```ts
@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  userName: string = "John Doe";

  textValue: string = 'Value is coming from component';

  // Method
  onKeyUp() {
    console.log(this.textValue);
    
  }
}
```

> html

```html
<div class=" p-20">
    <h1>First Angular App</h1>
    <h2>{{ userName }}</h2>

    <!--  -->

    <div class="space"></div>

    <!-- One way data binding -->
    <input class="input-nice" type="text" [value]="textValue" (keyup.enter)="onKeyUp()">


    <div class="space"></div>

    <!-- Two way data binding -->
     <input class="input-nice" type="text" [(ngModel)]="textValue" (keyup.enter)="onKeyUp()">

</div>
```  

- One way data binding cannot send data from `html` to `.ts`  
- Import `FormsModule` to `.ts` file
- Use `[(ngModel)]=""`  
- Use variable that declare from `.ts` in `html` file : `[(ngModel)]="userName"`
