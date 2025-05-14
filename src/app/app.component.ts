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

  index: number = 0;
  count: number = 0;
  
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

  constructor() {
    this.count = this.usersObj.length;
  }

  addNewUser() {
    let user: User = {id: 5, name: 'User 1', email: 'user1@gmail.com'};
    this.usersObj.push(user);
    this.count = this.usersObj.length;
  }

  onDelete(user: User) {
    this.index = this.usersObj.indexOf(user);
    this.usersObj.splice(this.index, 1);
    this.count = this.usersObj.length;
  }

  deleteFromIndex(index: number) {
    this.usersObj.splice(index, 1);
    this.count = this.usersObj.length;
    
  }
}

interface User {
  id: number;
  name: string;
  email: string;
}
