# Tutorial

## On Youtube

[Angular 18 Full Course (part 12) - Complete Zero to Hero Angular 18 full Tutorial](https://www.youtube.com/watch?v=Dbu__pRA1lk&list=PLG6SdLSnBhdWj797VAEvABNYIBEaVQnfF&index=21)  


## 🛠️ 🛠️ 🛠️ @switch  

[Document](https://angular.dev/guide/templates/control-flow#conditionally-display-content-with-the-switch-block)  


> ts

```ts
import {
  CommonModule,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
} from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  usersRole: string = 'Guest';
}
```

> html

```html
<div class=" p-20">

    <h1 class="font-semibold text-2xl">Ng-Switch</h1>

    <div [ngSwitch]="usersRole">
        <p *ngSwitchCase="'Admin'">Welcome Admin</p>
        <p *ngSwitchCase="'Member'">Welcome Member</p>
        <p *ngSwitchCase="'Guest'">Welcome Guest</p>
        <p *ngSwitchCase="'Editor'">Wecome Editor</p>
        <p *ngSwitchDefault="">Please Login</p>
    </div>

    <hr>

    <h1 class="font-semibold text-2xl">&#64;switch</h1>

    @switch (usersRole) {
    @case ('Admin') {
    <p>Welcome Admin</p>
    }
    @case ('Member') {
    <p>Welcome Member</p>
    }
    @case ('Guest') {
    <p>Welcome Guest</p>
    }
    @case ('Editor') {
    <p>Welcome Editor</p>
    }
    @default {
    <p>Please Login</p>
    }
    }

</div>
```  