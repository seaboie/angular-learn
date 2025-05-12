# Tutorial

## 🛠️ 🛠️ 🛠️ Event Binding

> ts

```ts
export class AppComponent {
  title: string = 'Event Binding';

  // Method
  keyUpEntering(user: HTMLInputElement) {
    console.log(user.value);
    user.value = "";
    
  }
}
```

> html

```html
     <input class="input-nice" type="text" placeholder="key up Enter" (keyup.enter)="keyUpEntering(user)" #user id="userInput">
```  

- Declare `#user` variable Template  
- in Method`(keyup.enter)="keyUpEntering(user)"` insert parameter `user`  
- Use `user` for get `value`  
