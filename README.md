# Tutorial

## On Youtube

**[Angular 19 Full Course part 29 - Angular 19 Reactive Forms #angular19](https://www.youtube.com/watch?v=Y7kJCkIjsy0&list=PLG6SdLSnBhdWj797VAEvABNYIBEaVQnfF&index=1)**

## 🛠️ 🛠️ 🛠️ Reactive Form

> app.component.ts

```ts
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-root",
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  // new Instance of form group
  userForm = new FormGroup({
    // new Instance of form control
    fname: new FormControl(),
    femail: new FormControl(),
    faddress: new FormControl(),
  });

  onSubmitR() {
    console.log(this.userForm);
  }
}
```

- Import : `imports: [FormGroup, FormControl, CommonModule, FormsModule, ReactiveFormsModule]`
- Declare : Instance FormGroup variable

```ts
// new Instance of form group
userForm = new FormGroup({
  // new Instance of form control
  fname: new FormControl(),
  femail: new FormControl(),
  faddress: new FormControl(),
});
```

---

> app.component.html

```html
<div class="p-4 grid w-full h-screen place-items-center">

    <div class="w-lg">
        <h1 class="text-2xl font-semibold">User Form</h1>
        <form [formGroup]="userForm" (ngSubmit)="onSubmitR()">
            <input class="input-nice" type="text" name="name" id="name" placeholder="Name" autocomplete="name" formControlName="fname">
            <input class="input-nice" type="email" name="email" id="email" placeholder="Email address" autocomplete="email" formControlName="femail">
            <textarea class="input-nice" name="address" id="address" autocomplete="address" formControlName="faddress"></textarea>

            <button class="btn-primary" type="submit">Submit</button>
        </form>
        <hr>
        
    </div>

</div>
```

- Use : `<form [formGroup]="userForm" (ngSubmit)="onSubmitR()">`
- Use : `formControlName="fname"`  
  - `<input class="input-nice" type="text" name="name" id="name" placeholder="Name" autocomplete="name" formControlName="fname">` 
