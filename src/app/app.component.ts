import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'This loaded dynamically ไดนามิก โหลด';
  one: number = 1;
  imgUrl: string = 'https://miro.medium.com/v2/resize:fit:1400/0*kuPL9dUjkbE3RqLg.png';
  
  // disable
  isDisable: boolean = false;

  // isActive
  isActive: boolean = true;

  // string condition
  fruitName: string = 'Apple';
}
