# Tutorial

## On Youtube

**[Angular 18 Full Course (part 26) - Angular Template Driven Forms](https://www.youtube.com/watch?v=m9UxsZ4F_gs&list=PLG6SdLSnBhdWj797VAEvABNYIBEaVQnfF&index=5)**

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
export interface UserFormModel {
  name: string;
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

  formSubmit(form: NgForm) {
    this.userForm = {
      ...this.userForm,
      ...FormUtils.getFormValues<UserFormModel>(form)
    }
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
      <input class="input-nice" type="text" name="name" id="name" autocomplete="name" placeholder="Name" ngModel />
      <input class="input-nice" type="email" name="email" id="email" autocomplete="email" placeholder="Email" ngModel />
      <input class="input-nice" type="text" name="address" id="address" autocomplete="address" placeholder="Address" ngModel />

      <button type="submit" class="btn-primary">Submit</button>
    </form>
    <hr />
    <h1 *ngIf="userForm">{{userForm.name}}</h1>
    <h1 *ngIf="userForm">{{userForm.email}}</h1>
    <h1 *ngIf="userForm">{{userForm.address}}</h1>
  </div>
</div>
```

- Must have : `<form (ngSubmit)="formSubmit(form)" #form="ngForm">`
  - `(ngSubmit)="formSubmit(form)"`
  - `#form="ngForm"` `form` variable template
- Must have : `<input class="input-nice" type="text" name="name" id="name" autocomplete="name" placeholder="Name" ngModel>`
  - `name="name"`
  - `autocomplete="name"`
  - `ngModel`
