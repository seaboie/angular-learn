import { CommonModule, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  loginCount: number = 0;
  
  countLoginAttempts() {
    this.loginCount!++;
  }

  resetLoginAttempts() {
    this.loginCount = 0;
  }
}
