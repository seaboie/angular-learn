import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'Event Binding';

  // Method

  keyUpEntering(user: HTMLInputElement) {
    console.log(user.value);
    user.value = "";
    
  }
}
