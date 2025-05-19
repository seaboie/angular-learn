import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface UserInterface {
  name: string;
  age: number;
  email: string
}

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  user: UserInterface = {
    name: 'John Doe',
    age: 30,
    email: 'john@doe.com'
  }

}
