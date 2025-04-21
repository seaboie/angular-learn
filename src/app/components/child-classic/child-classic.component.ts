import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-classic',
  imports: [],
  templateUrl: './child-classic.component.html',
  styleUrl: './child-classic.component.css'
})
export class ChildClassicComponent {
  @Input() title = '';
  @Output() clicked = new EventEmitter<void>();

}
