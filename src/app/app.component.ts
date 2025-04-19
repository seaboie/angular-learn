import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tutorial';

  firstName = signal('Hello World!');
  handleClicked() {
    this.firstName.set("Kritbovorn");
  }
  handleUpdate() {
    this.firstName.update((name) => "Taweeyossak");
  }

  count = signal(0);
  handleIncrement() {
    this.count.update((num) => num + 1);
  }
}
