import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user.component";

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isEditable = true;

  greeting() {
    alert(" Hello, there 👏")
  }

  message: string = "Way to go : Mouse Over 🚀"
  onMouseOver() {
    alert(this.message);
  }
}
