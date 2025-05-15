import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  isLoggedIn: boolean = true;

  // style variable
  navStyle = 'font-size: 2.2rem; color: cornflowerblue; font-weight: bold';
  navStyles = 'font-size: 4.2rem; color: cornflowerblue; font-weight: bold';

  // style object variable
  objectVariable = {'font-size': this.isLoggedIn ? '32px' : '18px', 'color': this.isLoggedIn ? 'blue' : 'green'}
}
