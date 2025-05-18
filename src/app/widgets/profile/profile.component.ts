import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnChanges {
  @Input() inputUsername: string = '';
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges Triggers');
    
  }
  
}
