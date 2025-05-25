import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import {} from './shared/types/form-error-type';
import { title } from 'node:process';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.registerForm.get('roleId')?.valueChanges.subscribe((roleId) => {
      console.log('Dropdown menu ID is: ', roleId);
      
    });
    this.registerForm.get('username')?.valueChanges.subscribe((username) => {
      console.log("Username change is ", username);
    })
  }

  private fb = inject(FormBuilder);

  registerForm = this.fb.group({
    username: this.fb.control('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    email: this.fb.control('', [Validators.required, Validators.email]),
    password: this.fb.control('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(6),
    ]),
    roleId: this.fb.control(1, [Validators.required]),
  });

  roles = [
    {id: 1, title: 'developer'},
    {id: 2, title: 'programmer'},
    {id: 3, title: 'student'}
  ];

  onSubmit(): void {
    console.log('Submit Form : ', this.registerForm.value);
    // this.registerForm.reset();
  }

  checkInvalidClass(name: string): boolean {
    return !!(
      this.registerForm.get(name)?.invalid &&
      (this.registerForm.get(name)?.dirty ||
        this.registerForm.get(name)?.touched)
    );
  }

  nameControlError(name: string): ValidationErrors | null | undefined {
    return this.registerForm.get(name)?.errors;
  }

  get usernameControl(): FormControl<string> {
    return this.registerForm.get('username') as FormControl<string>;
  }
}
