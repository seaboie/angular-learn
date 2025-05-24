# Tutorial

## On Youtube

**[Reactive Form Validation in Angular: Mastering Best Practices](https://www.youtube.com/watch?v=mOYAB1uMyhQs)**

## 🛠️ 🛠️ 🛠️ Reactive Form

- import `ReactiveFormsModule`  


> app.component.ts

```ts
import { CommonModule, JsonPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import {} from './shared/types/form-error-type';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

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
  });

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
```

---

> app.component.html

```html
<div class="p-4 grid w-full h-screen place-items-center">

    <div class="w-lg">
        <h1 class="text-2xl font-semibold">User Form</h1>
        <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">

            <input class="input-nice" type="text" name="" id="" [class.ng-invalid]="checkInvalidClass('username')"
                placeholder="Username" maxlength="12" formControlName="username">
                
            @if (checkInvalidClass('username')) {
            @if (nameControlError('username')?.['required']) {
            <small>Name is required</small>
            }
            @if (nameControlError('username')?.['minlength']; as error) {
            <small>Must have character atleast {{ error.requiredLength }} : Now {{ error.actualLength }}
                characters</small>
            }
            @if (nameControlError('username')?.['maxlength']; as error) {
            <small>Username must not exceed {{ error.requiredLength }} characters : now is {{ error.actualLength }}
                character</small>
            }

            }

            <pre>Error: {{registerForm.get('username')?.errors | json}}</pre>


            <input class="input-nice" type="text" name="" id="" placeholder="Email address"
                [class.ng-invalid]="checkInvalidClass('email')" formControlName="email">
            <input class="input-nice" type="text" name="" id="" placeholder="Your password" maxlength="8"
                [class.ng-invalid]="checkInvalidClass('password')" formControlName="password">

            <button class="btn-primary" type="submit">Submit</button>
        </form>
        <hr>

        <p>Username Value: {{ registerForm.get('username')?.value }}</p>
        <p>Email Value: {{ registerForm.get('email')?.value }}</p>
        <p>Password Value: {{ registerForm.get('password')?.value }}</p>

    </div>

</div>
```
