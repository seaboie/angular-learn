# Tutorial

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.7.

## On Youtube

[Angular Routing Essentials: All You Need to Know in One Video!](https://www.youtube.com/watch?v=BUDQTd1DQAg)

## Routes

For Input Binding

- In `app.config.ts` insert `withComponentInputBinding()`

> app.config.ts

```ts
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes, withComponentInputBinding()), provideClientHydration(withEventReplay())],
};
```

---

> app.routes.ts

```ts

```

## Redirect

```ts
export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
```

## Redirect Function

```ts
// Redirect Function
    {
        path: 'old-pages/:pageId',
        redirectTo: (route) => {
            return `/pages/${route.params['pageId']}`
        }
    },
```

---

## Nested Routes

> app.routes.ts

call it

`http://localhost:4200/settings/profile`

`http://localhost:4200/settings/products`

```ts
{
    path: 'settings',
    component: SettingsComponent,
    children: [
        {
            path: '',
            redirectTo: 'profile',
            pathMatch: 'full'
        },
        {
            path: 'profile',
            component: SettingsProfileComponent
        },
        {
            path: 'products',
            component: SettingsProductComponent
        }
    ],
},
```

---

## Active Routes

- Import `RouterLink, RouterLinkActive`
- Define `routerLinkActive="active font-semibold text-red-800`

> app.component.html

```html
<div class="flex justify-around mt-8 cursor-pointer text-blue-600">
  <a routerLink="/dashboard" routerLinkActive="active font-semibold text-red-800">Dashboard</a>
  <a routerLink="/products" routerLinkActive="active font-semibold text-red-800">Products</a>
  <a routerLink="/settings" routerLinkActive="active font-semibold text-red-800" [routerLinkActiveOptions]="{exact: true}">Settings</a>
  <a routerLink="settings/products" routerLinkActive="active font-semibold text-red-800">Settings Products</a>
  <a routerLink="settings/profile" routerLinkActive="active font-semibold text-red-800">Settings Profile</a>
</div>
```

---

## Using `routerLinkActive` in Angular

`routerLinkActive` is a directive in Angular that adds CSS classes to an element when the associated `routerLink` becomes active (matches the current route). Here's how to use it effectively:

## Basic Usage

```html
<a routerLink="/home" routerLinkActive="active">Home</a>
```

- When the URL matches `/home`, the `active` class will be added to the element.

## Multiple Classes

```html
<a routerLink="/dashboard" routerLinkActive="active font-bold">Dashboard</a>
```

- Multiple classes can be applied when the link is active.

## Exact Match (Strict Mode)

```html
<a routerLink="/products" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}"> Products </a>
```

- The `exact: true` option ensures the link is only active when the route matches exactly (won't be active on child routes).

## Using with Other Elements

```html
<li routerLinkActive="active">
  <a routerLink="/contact">Contact</a>
</li>
```

- The active class will be applied to the `<li>` when the link is active.

## Dynamic Styling Example

```html
<nav>
  <a routerLink="/" routerLinkActive="text-blue-600 border-b-2 border-blue-600" [routerLinkActiveOptions]="{exact: true}"> Home </a>
  <a routerLink="/about" routerLinkActive="text-blue-600 border-b-2 border-blue-600"> About </a>
</nav>
```

---

## Programmatic Navigation ( Injection )

> dashboard.component.ts

```ts
export class DashboardComponent {
  router = inject(Router);

  goToProductPage() {
    this.router.navigateByUrl("products");
  }

  goToSettingsProfile(): void {
    this.router.navigate(["settings/profile"]);
  }

  goToSettingsProducts(): void {
    this.router.navigate(["settings/products"]);
  }
}
```

- Define `router = inject(Router);`

- Use : `navigateByUrl()`

```ts
this.router.navigateByUrl("products");
```

- Use : `navigate([])

```ts
this.router.navigate(["settings/profile"]);

this.router.navigate(["settings/products"]);
```

---

## Lazy Loading

```ts
{
    path: 'products',
    loadComponent: () => import('./components/products/products.component').then((c) => c.ProductsComponent)
},
```

This code snippet is a common configuration for defining a route in an **Angular application** using the Angular Router. Let's break down what each part means:

- **`path: 'products'`**:

  - This property defines the **URL segment** that will trigger this route.
  - When the user navigates to a URL like `http://your-app-domain.com/products`, this specific route will be activated.

- **`loadComponent: () => import('./components/products/products.component').then((c) => c.ProductsComponent)`**:
  - This is the core of **lazy loading** a component in Angular.
  - **`loadComponent`**: This property is used for a standalone component (or a component that's part of a standalone component-based application). In older Angular versions (before standalone components were common), you'd typically use `loadChildren` to lazy load a module.
  - **`() => import('./components/products/products.component')`**: This is a dynamic `import()` statement. It tells Angular to:
    - **Asynchronously load** the JavaScript file associated with `products.component.ts` (and its template, styles, etc.). This loading happens only when the user _actually navigates_ to the `/products` path, not when the application initially loads.
    - Return a Promise that resolves with the loaded module.
  - **`.then((c) => c.ProductsComponent)`**: Once the module is loaded (the Promise resolves), this part extracts the `ProductsComponent` class from the loaded module. The `c` variable represents the entire module object.

**In summary, this Angular route configuration does the following:**

1.  **Maps the URL segment `products`** to a specific component.
2.  **Lazy loads the `ProductsComponent`**: This means the JavaScript bundle for `ProductsComponent` will only be downloaded from the server when a user navigates to the `/products` URL. This is a significant performance optimization, especially for larger applications, as it reduces the initial download size of the application.
3.  **Renders the `ProductsComponent`**: Once loaded, the `ProductsComponent` will be rendered within the `router-outlet` in your main application template.

**Why is this important?**

- **Performance:** Lazy loading dramatically improves the initial load time of your Angular application. Users only download the code they need for the current view, rather than the entire application's code upfront.
- **Scalability:** As your application grows, lazy loading helps keep the initial bundle size manageable, making it easier to scale and maintain.
- **User Experience:** Faster load times lead to a better user experience.

---  

## Route Guard  

Route guards in Angular are services that control whether a user can navigate to, away from, or through a route. They act as security checkpoints that execute before route navigation occurs.

## Types of Route Guards

**CanActivate** - Controls if a route can be activated (most common)
**CanActivateChild** - Controls if child routes can be activated
**CanDeactivate** - Controls if a user can leave a route
**CanLoad** - Controls if a module can be loaded lazily
**Resolve** - Pre-fetches data before route activation

## Example: Authentication Guard

Here's a practical example of a `CanActivate` guard that checks if a user is authenticated:

## How It Works

1. **Guard Implementation**: The `AuthGuard` implements the `CanActivate` interface and checks if the user is authenticated
2. **Route Configuration**: Guards are applied to routes using the `canActivate` property in the routing configuration
3. **Navigation Control**: If the guard returns `true`, navigation proceeds. If `false`, navigation is blocked
4. **Redirection**: Guards can redirect users to different routes (like a login page)

## Key Benefits

- **Security**: Prevent unauthorized access to protected routes
- **User Experience**: Warn users about unsaved changes before leaving pages
- **Data Loading**: Pre-fetch required data before showing components
- **Conditional Navigation**: Control navigation based on user roles, permissions, or application state

Guards execute in a specific order and can be combined on the same route. They're essential for building secure, user-friendly Angular applications with proper access control.
