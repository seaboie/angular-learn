import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  count: number = 0;
  @Output() incrementCountEvent = new EventEmitter<number>();
  onEmitClick() {
    this.count++;
    this.incrementCountEvent.emit(this.count);
  }

  @Output() addItemEvent = new EventEmitter<string>();
  onEmitAddItem() {
    this.addItemEvent.emit("🐢");
  }
}
