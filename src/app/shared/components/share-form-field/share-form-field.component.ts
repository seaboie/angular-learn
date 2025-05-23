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
