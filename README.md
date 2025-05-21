# Tutorial

## On Youtube

**[Angular 19 Full Course (part 30) - Reactive Forms The SECRET to Mastering Angular 19 Reactive Forms](https://www.youtube.com/watch?v=TNqZo9J83Ok&t=404s)**  

**[Angular 19 Full Course part 31 - Angular 19 Reactive Forms](https://www.youtube.com/watch?v=L9IRSgPd9D0)**  

## 🛠️ 🛠️ 🛠️ Reactive Form

> app.component.ts

```ts
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

```

- Import : `imports: [FormGroup, FormControl, CommonModule, FormsModule, ReactiveFormsModule, Validators]`
- Declare : Instance FormGroup variable

```ts
// new Instance of form group
  userForm = new FormGroup({
    // new Instance of form control
    fname : new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]),
    femail : new FormControl('', [Validators.required, Validators.email]),
    faddress : new FormControl('', [Validators.required, Validators.minLength(10)]),
  });
```

---

> app.component.html

```html
<div class="p-4 grid w-full h-screen place-items-center">

    <div class="w-lg">
        <h1 class="text-2xl font-semibold">User Form</h1>
        <form [formGroup]="userForm" (ngSubmit)="onSubmitR()">
            <input class="input-nice" type="text" name="name" id="name" placeholder="Name" autocomplete="name"
                formControlName="fname"
                [class.ng-invalid]="userForm.get('fname')?.touched && userForm.get('fname')?.invalid">
            <div>
                @if (userForm.get('fname')?.touched && userForm.get('fname')?.invalid) {
                @if (userForm.get('fname')?.hasError('required') ) {
                <p class="text-red-700">Name cannot be empty</p>
                }
                @if (userForm.get('fname')?.hasError('minlength')) {
                <p class="text-red-700">Name must be at least 3 characters</p>
                }
                @if (userForm.get('fname')?.hasError('maxlength')) {
                <p class="text-red-700">
                    You typed {{ userForm.get('fname')?.errors?.['maxlength'].acactualLength }} chars,
                    but max is {{ userForm.get('fname')?.errors?.['maxlength'].requiredLength }}.
                </p>
                }
                }

                <pre>Form Errors: {{ userForm.get('fname')?.errors | json }}</pre>
            </div>
            <input class="input-nice" type="email" name="email" id="email" placeholder="Email address"
                autocomplete="email" formControlName="femail"
                [class.ng-invalid]="userForm.get('femail')?.touched && userForm.get('femail')?.invalid">
            <div>
                @if (userForm.get('femail')?.touched && userForm.get('femail')?.invalid) {
                @if (userForm.get('femail')?.hasError('required')) {
                <p class="text-red-700">Email is required !!! </p>
                }
                @if (userForm.get('femail')?.hasError('email')) {
                <p class="text-red-700">Please insert a Valid email address !!!</p>
                }
                }
                <pre>Form Errors: {{ userForm.get('femail')?.errors | json }}</pre>
            </div>
            <textarea class="input-nice" name="address" id="address" autocomplete="address"
                formControlName="faddress" [class.ng-invalid]="userForm.get('femail')?.touched && userForm.get('femail')?.invalid"></textarea>

            <div>
                @if (userForm.get('faddress')?.touched && userForm.get('faddress')?.invalid) {
                @if (userForm.get('faddress')?.hasError('required') ) {
                <p class="text-red-700">Address cannot be empty</p>
                }
                @if (userForm.get('faddress')?.hasError('minlength')) {
                <p class="text-red-700">Address must be at least 10 characters</p>
                }
                }

                <pre>Form Errors: {{ userForm.get('faddress')?.errors | json }}</pre>
            </div>

            <button class="btn-primary" type="submit">Submit</button>
        </form>
        <hr>

    </div>

</div>
```

- Use : `<form [formGroup]="userForm" (ngSubmit)="onSubmitR()">`
- Use : `formControlName="fname"`  
  - `<input class="input-nice" type="text" name="name" id="name" placeholder="Name" autocomplete="name" formControlName="fname">` 
