import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  registerForm: FormGroup = new FormGroup({
    username: new FormControl<string>('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [Validators.required, Validators.maxLength(6), Validators.minLength(6)])
  });
  
  onSubmit(): void {
    console.log('Submit Form : ', this.registerForm.value);
    
  }
}
