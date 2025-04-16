import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user.component";
import { ChildComponent } from "./child/child.component";

@Component({
  selector: 'app-root',
  imports: [UserComponent, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  items: string[] = [];
  handleAddItem(item: string) {
    this.items.push(item);
  }

  count: number = 0;
  handleIncrement(item: number) {
    this.count = item;
  }
}
