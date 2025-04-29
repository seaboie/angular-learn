# Tutorial

## 🛠️ 🛠️ 🛠️ Event Binding

> ts

```ts
export class AppComponent {
  title: string = "Event Binding";

  // Method
  buttonClick() {
    alert("Button has been clicked ...");
  }
}
```

> html

```html
<button (click)="buttonClick()">Button Click show Alert</button>

<button (mouseover)="buttonClick()">Mouse Hover Show Alert</button>

<input type="text" (keyup)="keyEnter()" class="input-nice" placeholder="keyEnter" />

<input type="text" placeholder="Key up Entering" (keyup.enter)="keyUpEntering()" />

<input type="text" placeholder="Key up a" (keyup.a)="keyUpEntering()" />
```
