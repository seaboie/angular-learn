import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
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
    fname : new FormControl(),
    femail : new FormControl(),
    faddress : new FormControl(),
  });

  onSubmitR() {
    console.log(this.userForm);
  }
}
