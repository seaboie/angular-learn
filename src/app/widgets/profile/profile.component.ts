import { AfterContentInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnChanges, OnInit, DoCheck, AfterContentInit {

  @Input() inputUsername: string = '';
  
  constructor() {}

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  ngDoCheck(): void {
    
  }

  ngAfterContentInit(): void {
    console.log('Ng AfterContentInit triggered');
    
  }
}
