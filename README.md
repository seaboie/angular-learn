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




