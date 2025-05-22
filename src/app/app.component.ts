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
