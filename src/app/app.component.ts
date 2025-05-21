import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // new Instance of form group
  userForm = new FormGroup({
    // new Instance of form control
    fname : new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]),
    femail : new FormControl('', [Validators.required, Validators.email]),
    faddress : new FormControl('', [Validators.required, Validators.minLength(10)]),
  });

  onSubmitR() {
    console.log(this.userForm);
    console.log(this.userForm.get('fname'));
    
  }
}
