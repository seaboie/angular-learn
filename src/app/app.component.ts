import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProfileComponent } from "./widgets/profile/profile.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  userName: string = 'John Doe';
  changeUsername() {
    this.userName = 'John Smith';
  }
}
