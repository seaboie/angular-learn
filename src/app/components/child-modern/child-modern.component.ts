import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-child-modern',
  imports: [],
  template: `
    <h3>{{ title() }}</h3>
    <button (click)="clicked.emit()">Click Me</button>
  `,
  styleUrl: './child-modern.component.css',
})
export class ChildModernComponent {
  title = input<string>();
  clicked = output<void>();
}
