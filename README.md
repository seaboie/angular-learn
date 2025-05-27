# Tutorial ...

## Event Binding

> app.component.ts

```ts
@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  onSave(): void {
    alert("Data Saved Successfully.");
  }

  onChangeDropdown(): void {
    alert('Country has changed ......');
  }
}
```  

- `(click)="onSave()"`  
- `(change)="onChangeDropdown()"`  

> app.component.html

```html
<div class="grid place-items-center">
    <p class="text-xl">2. Event Binding</p>
    <button class="btn-primary" (click)="onSave()">Save</button>

    <select class="input-nice" (change)="onChangeDropdown()">
        <option value="">Select country</option>
        <option value="India">India</option>
        <option value="Germany">Germany</option>
        <option value="Franch">Franch</option>
        <option value="Spain">Spain</option>
    </select>
    
</div>
```
