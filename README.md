# Tutorial

## On Youtube

**[Reactive Form Validation in Angular: Mastering Best Practices](https://www.youtube.com/watch?v=mOYAB1uMyhQs)**  


## 🛠️ 🛠️ 🛠️ Reactive Form


###  Form shared component  

> share-form-field.component.ts  

```ts
import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ValidationInputMessageComponent } from "../validation-input-message/validation-input-message.component";

@Component({
  selector: 'app-share-form-field',
  standalone: true,
  imports: [ReactiveFormsModule, ValidationInputMessageComponent],
  template: `
  @if (type === 'textarea') {
    <textarea
      class="input-nice" 
      [name]="name"
      [placeholder]="placeholder"
      [autocomplete]="autocomplete"
      [formControl]="formControl"
      [class.ng-invalid]="isInvalid()"
    ></textarea>
  } @else {
    <input
      class="input-nice" 
      [type]="type"
      [name]="name"
      [placeholder]="placeholder"
      [autocomplete]="autocomplete"
      [formControl]="formControl"
      [class.ng-invalid]="isInvalid()"
    >
  }
   <app-validation-input-message [control]="control" [fieldName]="fieldName" />
  `,
  styleUrl: './share-form-field.component.css'
})
export class ShareFormFieldComponent {
  @Input() control!: AbstractControl;
  @Input() fieldName!: string;
  @Input() type: string = 'text';
  @Input() name!: string;
  @Input() placeholder: string = '';
  @Input() autocomplete: string = '';

  isInvalid(): boolean {
    return this.control?.invalid && (this.control.touched || this.control.dirty);
  }

  get formControl(): FormControl {
    return this.control as FormControl ;
  }
}
```  

---  

### Validate component  

> validation-input-message.component.ts  

```ts
import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-validation-input-message',
  imports: [],
  template: ` 
    @if (control?.invalid && (control?.touched || control?.dirty)) {
      @if (control?.errors?.['required']) {
        <small>* {{fieldName}} is a required field !!!</small>
      }
      @if (control?.errors?.['minlength']) {
        <small>* {{fieldName}} must be at least 
          {{control?.errors?.['minlength'].requiredLength}} characters long : Now is 
          {{control?.errors?.['minlength'].actualLength}} characters. !!!</small>
      }
      @if (control?.errors?.['maxlength']) {
        <small>* {{fieldName}} must not exceed 
          {{control?.errors?.['maxlength'].requiredLength}} characters long : Now is 
          {{control?.errors?.['maxlength'].actualLength}} !!!</small>
      }
      @if (control?.errors?.['email']) {
        <small>* Please enter a valid email address.</small>
      }
    }
  `,
  styles: [
    `
      small {
        color: #dc2626;
      }
    `,
  ],
})
export class ValidationInputMessageComponent {
  @Input() control: AbstractControl | null = null;
  @Input() fieldName: string = 'Field';
}
```  

---  

> app.component.ts

```ts
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ShareFormFieldComponent } from "./shared/components/share-form-field/share-form-field.component";

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ShareFormFieldComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  fb = inject(NonNullableFormBuilder);
  form = this.fb.group({
    firstname: this.fb.control('', {
      validators: [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10),
      ],
    }),
    email: this.fb.control('', {
      validators: [Validators.required, Validators.email],
    }),
    address: this.fb.control('', {
      validators: [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(12),
      ],
    }),
  });

  onSubmit() {
    console.log(this.form.getRawValue(), this.form.controls.firstname.errors);
  }

  // Solved problem of css : first loaded has border color
  isInvalidClass(controlName: string): boolean {
    const control = this.form.get(controlName);
    return control
      ? control.invalid && (control.touched || control.dirty)
      : false;
  }

  formFields = [
    {
      controlName: 'firstname',
      fieldName: 'First Name',
      type: 'text',
      placeholder: 'Firstname',
      autocomplete: 'firstname',
    },
    {
      controlName: 'email',
      fieldName: 'Email',
      type: 'email',
      placeholder: 'Email address',
      autocomplete: 'email',
    },
    {
      controlName: 'address',
      fieldName: 'Address',
      type: 'textarea',
      placeholder: 'Address',
      autocomplete: 'address',
    },
  ];
}
```


---

> app.component.html

```html
<div class="p-4 grid w-full h-screen place-items-center">

    <div class="w-lg">
        <h1 class="text-2xl font-semibold">User Form</h1>
        <form [formGroup]="form" (ngSubmit)="onSubmit()">
            

                <app-share-form-field
                    *ngFor="let field of formFields"
                    [control]="form.get(field.controlName)!"
                    [fieldName]="field.fieldName"
                    [type]="field.type"
                    [name]="field.controlName"
                    [placeholder]="field.placeholder"
                    [autocomplete]="field.autocomplete"

                 />

            <button [disabled]="form.invalid" class="btn-primary" type="submit">Submit</button>
        </form>
        <hr>

    </div>

</div>
```

