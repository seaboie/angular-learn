import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-child-modern',
  imports: [],
  templateUrl: './child-modern.component.html',
  styleUrl: './child-modern.component.css'
})
export class ChildModernComponent {
  title = input<string>();
  clicked = output<void>();
}
