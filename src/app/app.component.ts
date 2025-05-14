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
  // users: Array<string> = ["John", "Sam", "Smith", "Jenifer"];
  usersObj: Array<User> = [
    {
      id: 1,
      name: "John",
      email: "john@gmail.com"
    },
    {
      id: 2,
      name: "Smith",
      email: "smith@gmail.com"
    },
    {
      id: 3,
      name: "Sam",
      email: "sam@gmail.com"
    },
    {
      id: 4,
      name: "Jenifer",
      email: "jenifer@gmail.com"
    }
  ];
}

interface User {
  id: number;
  name: string;
  email: string;
}
