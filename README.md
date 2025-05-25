# Tutorial

## On Youtube

**[Reactive Form Validation in Angular: Mastering Best Practices](https://www.youtube.com/watch?v=mOYAB1uMyhQs)**

## 🛠️ 🛠️ 🛠️ ValueChange Subscribe

- implements `OnInit`
- `ngOnInit() {}`

> app.component.ts

```ts
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.registerForm.get('roleId')?.valueChanges.subscribe((roleId) => {
      console.log('Dropdown menu ID is: ', roleId);

    });
    this.registerForm.get('username')?.valueChanges.subscribe((username) => {
      console.log("Username change is ", username);
    })
  }
```

---

> app.component.html

```html
<select formControlName="roleId" class="input-nice">
  <option *ngFor="let role of roles" [ngValue]="role.id">{{role.title}}</option>
</select>
```
