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
