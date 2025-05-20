import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FormUtils } from './core/utils/form.utils';

export interface UserFormModel {
    name: string;
    email: string;
    address: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  userForm: UserFormModel = {
    name: '',
    email: '',
    address: ''
  }

  constructor() {}

  formSubmit(form: NgForm) {
    this.userForm = FormUtils.getFormValues<UserFormModel>(form);
  }
}
