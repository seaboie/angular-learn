import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ValidationInputMessageComponent } from "./shared/components/validation-input-message/validation-input-message.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ValidationInputMessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  fb = inject(NonNullableFormBuilder);
  form = this.fb.group({
    firstname: this.fb.control('', {validators: [Validators.required, Validators.minLength(5), Validators.maxLength(10)]}),
    email: this.fb.control('', {validators: [Validators.required , Validators.email]}),
    address: this.fb.control('', {validators: [Validators.required, Validators.minLength(3), Validators.maxLength(12)]})
  });

  onSubmit() {
    console.log(this.form.getRawValue(), this.form.controls.firstname.errors);
    
  }

  // Solved problem of css : first loaded has border color
  isInvalidClass(controlName: string): boolean {
    const control = this.form.get(controlName);
    return control ? control.invalid && (control.touched || control.dirty) : false;
  }
}
