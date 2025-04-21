# Tutorial

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.7.

## On Youtube

[Modern Angular 19 Crash Course - E-commerce App!](https://www.youtube.com/watch?v=RNr1QZM4A38)

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

---   

---   

# Immutable && Mutable  

🔥 🔥 🔥 การเปลี่ยน state แบบ **immutable** เป็นแนวคิดที่สำคัญมาก โดยเฉพาะเมื่อใช้กับ `ChangeDetectionStrategy.OnPush` ใน Angular  
เดี๋ยวอธิบายให้ง่าย ๆ พร้อมตัวอย่างเลยครับ 🧠👇

---

## 🧊 คืออะไร: "เปลี่ยน state แบบ **immutable**"

### ❌ "Mutable" คือการ **เปลี่ยนแปลงของเดิม**

```ts
const user = { name: 'John' };
user.name = 'Jane'; // เปลี่ยน object เดิม
```

- แบบนี้ Angular **ไม่สามารถรู้ได้ว่า object เปลี่ยน**  
เพราะ reference ของ `user` **ยังเป็นตัวเดิมอยู่**

---

### ✅ "Immutable" คือการ **สร้าง object ใหม่**

```ts
const user = { name: 'John' };
const newUser = { ...user, name: 'Jane' }; // สร้างใหม่โดย copy แล้วเปลี่ยนเฉพาะ name
```

- แบบนี้ `newUser` จะมี **reference ใหม่**
- Angular ที่ใช้ `OnPush` จะรู้ว่า `@Input()` เปลี่ยน → จึง render ใหม่

---

## 🔍 ตัวอย่างใน Angular จริง ๆ

### 🔸 สมมุติว่าเรามี component แบบนี้:

```ts
@Component({
  selector: 'app-profile',
  template: `ชื่อ: {{ user.name }}`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent {
  @Input() user!: { name: string };
}
```

### 🔸 แล้วใน parent component:

```ts
@Component({
  selector: 'app-root',
  template: `
    <app-profile [user]="user"></app-profile>
    <button (click)="changeName()">เปลี่ยนชื่อ</button>
  `
})
export class AppComponent {
  user = { name: 'John' };

  // ❌ แบบนี้ผิด ถ้าใช้ OnPush
  changeName() {
    this.user.name = 'Jane';
  }

  // ✅ แบบนี้ถูก
  // changeName() {
  //   this.user = { ...this.user, name: 'Jane' };
  // }
}
```

### 📌 ทำไมแบบแรกไม่ทำงาน?
เพราะ Angular ดูว่า `@Input() user` เปลี่ยนมั้ย **จาก reference เดิม**  
แต่ `this.user.name = 'Jane'` → reference เดิม → Angular ไม่ detect → ไม่ render ใหม่

---

## 🧠 TL;DR: Immutable Update Pattern

| เป้าหมาย | วิธีเขียน |
|----------|-----------|
| เปลี่ยน string หรือ number | `this.name = 'New Name';` (ok) |
| เปลี่ยน object | `this.user = { ...this.user, name: 'New' };` |
| เปลี่ยน array | `this.list = [...this.list, newItem];` |
| ลบใน array | `this.list = this.list.filter(x => x.id !== id);` |
| อัปเดตใน array | `this.list = this.list.map(item => item.id === id ? {...item, name: 'Updated'} : item);` |

---

---  

## 🛠️ 🛠️ 🛠️ 🛠️ 🛠️ Use Spread operator  

 **Spread Operator (`...`)**  **object** และ **array**  😄

---

## 🌀 Spread Operator คืออะไร?

**`...`** (สามจุด) เรียกว่า **spread operator**  
มันใช้เพื่อ:

1. **คัดลอก (copy)** ค่าจาก **object** หรือ **array**
2. **ขยาย (spread)** เนื้อหาของ object หรือ array ไปยังอีกอันนึง

---

## 🧱 ใช้กับ **Object**

### ✅ ตัวอย่าง:

```ts
const user = { name: 'John', age: 25 };

const newUser = { ...user, name: 'Jane' };
```

### 👉 อธิบาย:

- `...user` จะคัดลอก field ทั้งหมดจาก `user` มาใส่ใน `newUser`
- แล้ว `name: 'Jane'` จะ **overwrite** ค่าเดิมของ name

### 🎯 ผลลัพธ์:
```ts
newUser = { name: 'Jane', age: 25 }
```

> ✅ แบบนี้คือ **immutable update** เพราะ `newUser` เป็น object ใหม่ (reference ใหม่)

---

## 📚 ใช้กับ **Array**

### ✅ ตัวอย่าง:

```ts
const numbers = [1, 2, 3];

const newNumbers = [...numbers, 4];
```

### 👉 อธิบาย:

- `...numbers` คัดลอกค่าทั้งหมดใน array
- แล้วต่อท้ายด้วย `4`

### 🎯 ผลลัพธ์:
```ts
newNumbers = [1, 2, 3, 4]
```

---

## 🧠 สรุปง่าย ๆ:

| งานที่ทำ | Code ตัวอย่าง | ผลลัพธ์ |
|----------|----------------|----------|
| Clone object | `{ ...user }` | copy ใหม่ |
| Update field | `{ ...user, name: 'A' }` | เปลี่ยนเฉพาะ field |
| Add to array | `[...arr, item]` | ต่อท้าย |
| Remove from array | `arr.filter()` | เอาออก |
| Update item in array | `arr.map()` + `...item` | แก้เฉพาะบางตัว |

---

## 🔧 ตัวอย่างที่ใช้ใน Angular (กับ `OnPush`)

```ts
this.user = { ...this.user, name: 'ใหม่' }; // update object แบบ immutable
this.todos = [...this.todos, newTodo]; // เพิ่ม todo แบบ immutable
```

---

## 💬 สรุปสั้น ๆ:

- `...` ใช้เพื่อ "แผ่" object หรือ array ออกมา
- ใช้กับ `OnPush` เพื่อให้ Angular รู้ว่า **ค่ามีการเปลี่ยนแปลง**
- ช่วยให้เขียน code ที่ **clean**, **ปลอดภัย**, และ **เร็ว** (Angular จะตรวจเฉพาะที่จำเป็น)

---

---  

### 🎯 ตัวอย่างที่ 1: ใช้ `spread` กับ Object (เปลี่ยนค่าผู้ใช้แบบ immutable)

```ts
@Component({
  selector: 'app-root',
  template: `
    <p>ชื่อ: {{ user.name }}</p>
    <p>อายุ: {{ user.age }}</p>
    <button (click)="changeName()">เปลี่ยนชื่อ</button>
  `
})
export class AppComponent {
  user = { name: 'John', age: 25 };

  // ✅ ใช้ spread operator เพื่อสร้าง object ใหม่
  changeName() {
    this.user = { ...this.user, name: 'Jane' };
    // user = { name: 'Jane', age: 25 }
  }
}
```

#### 🧠 ถ้าใช้ `OnPush`:
- Angular จะตรวจว่า input เปลี่ยน (เพราะ object reference ใหม่)
- จึง update UI ได้แน่นอน

---

### 🎯 ตัวอย่างที่ 2: ใช้ `spread` กับ Array (เพิ่ม item ใหม่แบบ immutable)

```ts
@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li *ngFor="let todo of todos">{{ todo }}</li>
    </ul>
    <button (click)="addTodo()">เพิ่มงาน</button>
  `
})
export class AppComponent {
  todos = ['ซื้อข้าว', 'ล้างจาน'];

  addTodo() {
    this.todos = [...this.todos, 'ไปออกกำลังกาย'];
    // todos = ['ซื้อข้าว', 'ล้างจาน', 'ไปออกกำลังกาย']
  }
}
```

> ✅ Angular เห็น array ใหม่ (เพราะ spread แล้วได้ array ใหม่)  
> → จึง render `*ngFor` ใหม่เฉพาะที่จำเป็น

---

## 🔄 เปรียบเทียบ: `spread` vs `mutation`

| แบบเปลี่ยนค่าเดิม (❌) | แบบ immutable ด้วย spread (✅) |
|---------------------|-------------------------------|
| `this.user.name = 'Jane'` | `this.user = { ...this.user, name: 'Jane' }` |
| `this.todos.push('A')` | `this.todos = [...this.todos, 'A']` |

---


---   



## Declare property `String`

- Use `get`

```ts
get cartLabel() {
    return `Cart ( ${this.cartService.cart().length} )`;
}
```

## Signal method

[Signal](https://angular.dev/essentials/signals)  
[Angular Signals](https://angular.dev/guide/signals)

Manage State

### `set`

### `update(() => ...)`

```ts
import { signal } from "@angular/core";

// Create a signal with the `signal` function.
const firstName = signal("Morgan");

// Read a signal value by calling it— signals are functions.
console.log(firstName());

// Change the value of this signal by calling its `set` method with a new value.
firstName.set("Jaime");

// You can also use the `update` method to change the value
// based on the previous value.
firstName.update((name) => name.toUpperCase());
```  

In Angular's Signals API, the `signal()` function can take an optional `CreateSignalOptions` object as its second argument. This object allows you to configure the signal's behavior. Here's an example of how to use it:  

`signal(initialValue: unknown, options?: CreateSignalOptions<unknown> | undefined): WritableSignal<unknown>`  

```ts
import { signal } from '@angular/core';

// Create a signal with initial value and options
const count = signal(0, {
  equal: (a, b) => a === b, // Custom equality function
});
```  

```ts
const user = signal({ name: 'Alice' }, {
  equal: (a, b) => a.name === b.name, // Only compare the 'name' property
});
```  


## Computed expressions

[Computed expressions](https://angular.dev/essentials/signals#computed-expressions)

A `computed` signal is read-only; it does not have a `set` or an `update` method. Instead, the value of the `computed` signal automatically changes when any of the signals it reads change:

```ts
import { signal, computed } from "@angular/core";

const firstName = signal("Morgan");
const firstNameCapitalized = computed(() => firstName().toUpperCase());
console.log(firstNameCapitalized()); // MORGAN

firstName.set("Jaime");

console.log(firstNameCapitalized()); // JAIME
```  

> เหมือน if statement ; ถ้า A เปลี่ยน B จะทำอะไรบางอย่าง โดยอ้างอิงจากค่า ของ A  

### [Computed signal dependdencies are dynamic](https://angular.dev/guide/signals#computed-signal-dependencies-are-dynamic)  

Only the signals actually read during the derivation are tracked. For example, in this `computed` the `count` signal is only read if the `showCount` signal is true:  

```ts

```  


## Showing dynamic text

[Showing dynamic text](https://angular.dev/essentials/templates#showing-dynamic-text)

You can create a binding to show some dynamic text in a template by using double curly-braces:  
`{{...}}`

```ts
@Component({
  selector: "user-profile",
  template: `<h1>Profile for {{ userName() }}</h1>`,
})
export class TodoListItem {
  userName = signal("pro_programmer_123");
}
```

## Dependency Injection

[Dependency Injection](https://angular.dev/essentials/dependency-injection)

Reuse code and control behaviors across your application and tests.

Here is an example of a `Calculator` service.

```ts
import { Injectable } from "@angular/core";
@Injectable({ providedIn: "root" })
export class Calculator {
  add(x: number, y: number) {
    return x + y;
  }
}
```  

### [How to use a service](https://angular.dev/essentials/dependency-injection#how-to-use-a-service)  

When you want to use a service in a component, you need to:
1. Import the service  
2. Declare a class field where the service is injected. Assign the class field to the result of the call of the built-in function `inject` which creates the service  

```ts
import { Component, inject } from '@angular/core';
import { Calculator } from './calculator';
@Component({
  selector: 'app-receipt',
  template: `<h1>The total is {{ totalCost }}</h1>`,
})
export class Receipt {
  private calculator = inject(Calculator);
  totalCost = this.calculator.add(50, 25);
}
```  

## Tutorial  

### [Build your first Angular app](https://angular.dev/tutorials/first-app)  



## Use ` *ngFor() `  

> Must import `CommonModule`  
```ts
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  ...
}
```  

```ts
<section class="results">
    <app-housing-location
        *ngFor="let housingLocation of housingLocationList"
        [housingLocation]="housingLocation"
    />
</section>
```  

## 🚀 🚀 🚀 `(input)` event binding  

```ts
<input
  type="text"
  placeholder="Filter by City"
  #filter
  (input)="filterResults(filter.value)" // Listen to the 'input' event
/>
```  

To make the filtering happen as the user types, instead of waiting for a button click, you need to listen to the `(input)` event on the text input field. Here's what I've changed in your code:  

1. Import `FormsModule`: I've added `FormsModule` to the `imports` array in your `@Component` decorator. This module is necessary to work with form elements and their events.  

2. Listen to `(input)`: On the `<input>` element, I've added the `(input)` event binding. This event fires every time the value of the input field changes.  

3. Call `filterResults` on `input`: The `(input)` event binding calls your `filterResults method`, passing in the current value of the input field `(filter.value)`.  

Now, as the user types in the "Filter by City" input, the `filterResults` function will be executed on each keystroke, updating the `filteredLocationList` and instantly reflecting the changes in the displayed housing locations.  

## Template reference variable on `<input>`  

In your template, `#filter` creates a template reference variable on the `<input>` element:  

```ts
<input
  type="text"
  placeholder="Filter by City"
  #filter
  (input)="filterResults(filter.value)"
  (focus)="clearPlaceholder(filter)"
  (blur)="restorePlaceholder(filter)"
/>
```  

This `#filter` acts like a local name that you can use within the template to refer directly to that specific `<input>` element. It gives you a way to access the properties and methods of the underlying DOM element.  

Now, let's look at the event bindings:  

- `(focus)="clearPlaceholder(filter)"`:   
When the `focus` event occurs on the `<input>` element, Angular will execute the `clearPlaceholder method` in your `HomeComponent`. The `(filter)` part is passing the template reference variable (which points to the `<input>` element itself) as an argument to the `clearPlaceholder method`.  

- `(blur)="restorePlaceholder(filter)"`:   
Similarly, when the `blur` event occurs, Angular calls the `restorePlaceholder method`, again passing the template reference variable (filter) as an argument.  

Here's how your methods are defined in the component:  

```ts
clearPlaceholder(inputElement: HTMLInputElement) {
  inputElement.placeholder = '';
}

restorePlaceholder(inputElement: HTMLInputElement) {
  if (!inputElement.value) {
    inputElement.placeholder = this.originalPlaceholder;
  }
}
```  

## Configure the JSON server  

[Configure the JSON server](https://angular.dev/tutorials/first-app/14-http#configure-the-json-server)    

1. Install `json-server` from npm by using the following command.  

```bash
npm install -g json-server
```  

2. In the root directory of your project, create a file called `db.json`. This is where you will store the data for the `json-server`.  

3. Open `db.json` and copy the following code into the file
```json
{
         "locations": [
             {
                 "id": 0,
                 "name": "Acme Fresh Start Housing",
                 "city": "Chicago",
                 "state": "IL",
                 "photo": "https://angular.dev/assets/images/tutorials/common/bernard-hermant-CLKGGwIBTaY-unsplash.jpg",
                 "availableUnits": 4,
                 "wifi": true,
                 "laundry": true
             },
             {
                 "id": 1,
                 "name": "A113 Transitional Housing",
                 "city": "Santa Monica",
                 "state": "CA",
                 "photo": "https://angular.dev/assets/images/tutorials/common/brandon-griggs-wR11KBaB86U-unsplash.jpg",
                 "availableUnits": 0,
                 "wifi": false,
                 "laundry": true
             },
             {
                 "id": 2,
                 "name": "Warm Beds Housing Support",
                 "city": "Juneau",
                 "state": "AK",
                 "photo": "https://angular.dev/assets/images/tutorials/common/i-do-nothing-but-love-lAyXdl1-Wmc-unsplash.jpg",
                 "availableUnits": 1,
                 "wifi": false,
                 "laundry": false
             },
             {
                 "id": 3,
                 "name": "Homesteady Housing",
                 "city": "Chicago",
                 "state": "IL",
                 "photo": "https://angular.dev/assets/images/tutorials/common/ian-macdonald-W8z6aiwfi1E-unsplash.jpg",
                 "availableUnits": 1,
                 "wifi": true,
                 "laundry": false
             },
             {
                 "id": 4,
                 "name": "Happy Homes Group",
                 "city": "Gary",
                 "state": "IN",
                 "photo": "https://angular.dev/assets/images/tutorials/common/krzysztof-hepner-978RAXoXnH4-unsplash.jpg",
                 "availableUnits": 1,
                 "wifi": true,
                 "laundry": false
             },
             {
                 "id": 5,
                 "name": "Hopeful Apartment Group",
                 "city": "Oakland",
                 "state": "CA",
                 "photo": "https://angular.dev/assets/images/tutorials/common/r-architecture-JvQ0Q5IkeMM-unsplash.jpg",
                 "availableUnits": 2,
                 "wifi": true,
                 "laundry": true
             },
             {
                 "id": 6,
                 "name": "Seriously Safe Towns",
                 "city": "Oakland",
                 "state": "CA",
                 "photo": "https://angular.dev/assets/images/tutorials/common/phil-hearing-IYfp2Ixe9nM-unsplash.jpg",
                 "availableUnits": 5,
                 "wifi": true,
                 "laundry": true
             },
             {
                 "id": 7,
                 "name": "Hopeful Housing Solutions",
                 "city": "Oakland",
                 "state": "CA",
                 "photo": "https://angular.dev/assets/images/tutorials/common/r-architecture-GGupkreKwxA-unsplash.jpg",
                 "availableUnits": 2,
                 "wifi": true,
                 "laundry": true
             },
             {
                 "id": 8,
                 "name": "Seriously Safe Towns",
                 "city": "Oakland",
                 "state": "CA",
                 "photo": "https://angular.dev/assets/images/tutorials/common/saru-robert-9rP3mxf8qWI-unsplash.jpg",
                 "availableUnits": 10,
                 "wifi": false,
                 "laundry": false
             },
             {
                 "id": 9,
                 "name": "Capital Safe Towns",
                 "city": "Portland",
                 "state": "OR",
                 "photo": "https://angular.dev/assets/images/tutorials/common/webaliser-_TPTXZd9mOo-unsplash.jpg",
                 "availableUnits": 6,
                 "wifi": true,
                 "laundry": true
             }
         ]
     }
```  

4. Time to test your configuration. From the command line, at the root of your project run the following commands.  

```bash
json-server --watch db.json
```  

5. In your web browser, navigate to the `http://localhost:3000/locations` and confirm that the response includes the data stored in `db.json`.  


---   







