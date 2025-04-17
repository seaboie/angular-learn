import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from "./child/child.component";

@Component({
  selector: 'app-root',
  imports: [ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  item: number = 0;
  handlerIncrement(num: number) {
    this.item = num;
  }

  // 
  items: string[] = [];
  handlerAddItem(item: string) {
    this.items.push(item);
  }
}
