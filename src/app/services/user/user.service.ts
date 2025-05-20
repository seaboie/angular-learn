import { Injectable } from '@angular/core';

export interface UserInterface {
  name: string;
  age: number;
  email: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: UserInterface[] = [
    {name: 'John Doe', age: 30, email: 'john@doe.com'},
    {name: 'John Smith', age: 24, email: 'john@smith.com'},
    {name: 'Liza Ann', age: 50, email: 'liza@ann.com'},
    {name: 'Sam Smith', age: 43, email: 'sam@smith.com'}
  ]

  constructor() { 
    console.log('User service new instance created !!!!!!!');
    
  }
}
