import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  isValidUserId = signal(false);
  userName = signal("pro_programmer_123");

  handlerClicked() {
    this.userName.set("cool_coder_789");
  }

  handleUpdate() {
    this.userName.update((current) => "Kritbovorn");
  }

  handleIsValid() {
    this.isValidUserId.set(!this.isValidUserId());
  }
}
