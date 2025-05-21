# Tutorial

## On Youtube

**[Angular 18 Full Course (part 26) - Angular Template Driven Forms](https://www.youtube.com/watch?v=m9UxsZ4F_gs&list=PLG6SdLSnBhdWj797VAEvABNYIBEaVQnfF&index=5)**
**[Angular 18 Full Course (part 27) - Template Driven Forms](https://www.youtube.com/watch?v=cYlHeEK9GAg&list=PLG6SdLSnBhdWj797VAEvABNYIBEaVQnfF&index=4)**  
**[Angular 18 Full Course (part 28) - Template Driven Forms](https://www.youtube.com/watch?v=9r38ePlIzXs&list=PLG6SdLSnBhdWj797VAEvABNYIBEaVQnfF&index=2)**

## 🛠️ 🛠️ 🛠️ Template Driven Forms

> form.utils.ts

```ts
import { NgForm } from "@angular/forms";

export abstract class FormUtils {
  static getFormValues<T>(form: NgForm): T {
    return form.value as T;
  }

  static logFormErrors(form: NgForm): void {
    Object.keys(form.controls).forEach((key) => {
      const control = form.controls[key];
      if (control.errors) {
        console.log(`${key} errors: `, control.errors);
      }
    });
  }
}
```

---

> app.component.ts

```ts
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { FormUtils } from "./core/utils/form.utils";

export interface UserFormModel {
  fullname: string;
  email: string;
  address: string;
}

@Component({
  selector: "app-root",
  imports: [CommonModule, FormsModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  userForm?: UserFormModel;

  constructor() {}

  formSubmit(form: NgForm) {
    this.userForm = {
      ...this.userForm,
      ...FormUtils.getFormValues<UserFormModel>(form),
    };
    console.log(this.userForm);
  }

  getValue(fullname: any) {
    console.log(fullname);
  }
}
```

- Use Utils method : `FormUtils.getFormValues<UserFormModel>(form)`

---

> app.component.html

```html
<div class="p-4 grid w-full h-screen place-items-center">
  <div class="w-lg">
    <h1 class="text-2xl font-semibold">User Form</h1>
    <form (ngSubmit)="formSubmit(form)" #form="ngForm">
      <input class="input-nice" type="text" name="fullname" id="fullname" autocomplete="fullname" placeholder="Name" ngModel #fullname="ngModel" (change)="getValue(fullname)" [class.ng-invalid]="fullname.invalid && (fullname.dirty || fullname.touched)" minlength="3" maxlength="10" required />
      <div>
        @if (fullname.invalid && (fullname.dirty || fullname.touched)) { @if (fullname.hasError('required')) {
        <p class="text-red-700">Fullname is required...</p>
        } @if (fullname.hasError('minlength')) {
        <p class="text-red-700">Name must be atleast 3 charactors long...</p>
        } }
      </div>
      <pre>Validation Errors:  {{ fullname.errors | json }}</pre>
      <input class="input-nice" type="email" name="email" id="email" autocomplete="email" placeholder="Email" #email="ngModel" ngModel required pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" [class.ng-invalid]="email.invalid && email.touched" />
      <div>
        @if (email.invalid && email.touched) { @if (email.hasError('required')) {
        <p class="text-red-700">Email is required...</p>
        } @if (email.hasError('pattern')) {
        <p class="text-red-700">Invalid email address...</p>
        } }
      </div>
      <pre>Validation Errors:  {{ email.errors | json }}</pre>
      <textarea class="input-nice" name="address" id="address" placeholder="address" ngModel #address="ngModel" required [class.ng-invalid]="address.invalid && address.touched"></textarea>
      <div>
        @if (address.invalid && address.touched) { @if (address.hasError('required')) {
        <p class="text-red-700">Address is required...</p>
        } }
      </div>
      <pre>Validation Errors:  {{ address.errors | json }}</pre>

      <button type="submit" class="btn-primary" [disabled]="form.invalid">Submit</button>
    </form>
    <hr />
    <h1 *ngIf="userForm">{{userForm.fullname}}</h1>
    <h1 *ngIf="userForm">{{userForm.email}}</h1>
    <h1 *ngIf="userForm">{{userForm.address}}</h1>
  </div>
</div>
```

- Must have : `<form (ngSubmit)="formSubmit(form)" #form="ngForm">`
  - `(ngSubmit)="formSubmit(form)"`
  - `#form="ngForm"` `form` variable template
- Must have : `<input 
                  class="input-nice" 
                  type="text" 
                  name="fullname" 
                  id="fullname" 
                  autocomplete="fullname"
                  placeholder="Name" 
                  ngModel 
                  #fullname="ngModel" 
                  (change)="getValue(fullname)"
                  [class.ng-invalid]="fullname.invalid && (fullname.dirty || fullname.touched)"  
                  minlength="3" 
                  maxlength="10" 
                  required
                  >`
  - `name="fullname"`
  - `autocomplete="fullname"`
  - `ngModel`
  - `#fullname="ngModel"`
