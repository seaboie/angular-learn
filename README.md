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

}
```

> html

```html
<input class="input-nice" type="text" [(ngModel)]="userName">
```  

- Import `FormsModule` to `.ts` file
- Use `[(ngModel)]=""`  
- Use variable that declare from `.ts` in `html` file : `[(ngModel)]="userName"`
