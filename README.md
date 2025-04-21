# Tutorial


## Textfield has focus  

```ts
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  template: `
    <input
      class="input-nice"
      [(ngModel)]="todoText"
      [attr.placeholder]="isFocused ? '' : placeholderText"
      (focus)="isFocused = true"
      (blur)="isFocused = false"
    />
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  todoText = '';
  placeholderText = 'insert somethings';
  isFocused = false;
}
```  

