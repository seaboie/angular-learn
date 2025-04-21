import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildClassicComponent } from "./components/child-classic/child-classic.component";
import { ChildModernComponent } from "./components/child-modern/child-modern.component";

@Component({
  selector: 'app-root',
  imports: [ChildClassicComponent, ChildModernComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  classic = "Classic 🐢";
  classicCount = 0;

  modern = "Modern ✨";
  modernCount = 0;

  incrementClassic() {
    this.classicCount++;
  }

  incrementModern() {
    this.modernCount++;
  }

}
