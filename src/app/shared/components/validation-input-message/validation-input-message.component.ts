import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-validation-input-message',
  imports: [CommonModule],
  template: `
    @if (control?.invalid && (control?.touched || control?.dirty)) { @if
    (control?.errors?.['forbidddenRole']) {
    <small>* This Role is not allowed</small>
    } @else if (control?.errors?.['forbiddenName']) {
    <small>* This name is not allowed</small>
    } @else { @if (control?.errors?.['required']) {
    <small>* {{ fieldName }} is a required field !!!</small>
    } @if (control?.errors?.['minlength']) {
    <small>
      * {{ fieldName }} must be at least
      {{control?.errors?.['minlength'].requiredLength}} characters long : Now is
      {{control?.errors?.['minlength'].actualLength}} characters. !!!
    </small>
    } @if (control?.errors?.['maxlength']) {
    <small>
      * {{ fieldName }} must not exceed
      {{control?.errors?.['maxlength'].requiredLength}} characters long : Now is
      {{control?.errors?.['maxlength'].actualLength}} !!!
    </small>
    } @if (control?.errors?.['email']) {
    <small>* Please enter a valid email address.</small>
    } } }
    <p>Error: !!! {{ control?.errors | json }}</p>
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
