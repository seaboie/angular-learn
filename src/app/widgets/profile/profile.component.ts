import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit, DoCheck, OnChanges {
  @Input() inputUsername: string = '';
  counter: number = 0;

  constructor() {
    console.log('constructor triggered');
    console.log(this.inputUsername);
    
  }

  ngOnInit(): void {
    console.log('ngOnInit hook triggered');
    console.log(this.inputUsername);
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges hook triggered');
    
  }
  ngDoCheck(): void {
    console.log('ngDoCheck hook triggered');
  }

  incrementCounter() {
    this.counter++;
  }
  
  
}
