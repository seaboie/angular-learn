import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ShareFormFieldComponent } from "./shared/components/share-form-field/share-form-field.component";
import { map, Observable, of } from 'rxjs';

// Custom Validators method
export const forbiddenNameValidator = (names: string[]): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    return names.includes(control.value)
    ? {forbiddenName: true}
    : null;
  }
}

// Custom Async Validators method
export const asyncRoleValidator = (control: AbstractControl): Observable<ValidationErrors | null> => {
  const allowedRoles = ['admin', 'dev'];
  return of(control.value).pipe(map((value) => {
    return allowedRoles.includes(value) ? null : {forbidddenRole: 'Role is not allowed'};
  }))
}

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
        forbiddenNameValidator(['foo', 'footer'])
      ],
    }),
    email: this.fb.control('', {
      validators: [Validators.required, Validators.email],
    }),
    role: this.fb.control('', {
      validators: [Validators.minLength(2)],
      asyncValidators: [asyncRoleValidator]
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
      controlName: 'role',
      fieldName: 'Role',
      type: 'text',
      placeholder: 'Your Role... [admin, dev]',
      autocomplete: 'Dev',
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
