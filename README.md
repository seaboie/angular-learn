# Tutorial  

## [Document](https://angular.dev/guide/routing/common-router-tasks)  

## Define basic route  

> ` app.config.ts `  

Add the ` withComponentInputBinding() ` feature to the provideRouter method.  

```ts
providers: [
  provideRouter(appRoutes, withComponentInputBinding()),
]
```  

```ts
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes, withComponentInputBinding()), provideClientHydration(withEventReplay())]
};
```  

> ` app.routes.ts `  

```ts
import { Routes } from '@angular/router';
import { FirstComponent } from './pages/first/first.component';
import { SecondComponent } from './pages/second/second.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: 'first-component', component: FirstComponent },
    { path: 'second-component', component: SecondComponent },
    { path: '', redirectTo: '/first-component', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent } 
];
```  

> ` app.component.ts `  

🛠️ 🛠️ 🛠️ Must import `RouterLink`, `RouterLinkActive`, `RouterOutlet`  

```ts
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
```  
> ` app.component.html `  

1. ` routerLink ` in `<a routerLink=""></a>`  ต้อง `import {RouterLink, RouterOutlet}`  

2. ` <router-outlet /> ` คือ ที่ๆจะแสดง View page  
```html
<h1>Angular Router App</h1>
<nav>
  <ul>
    <li><a routerLink="/first-component" routerLinkActive="active" ariaCurrentWhenActive="page">First Component</a></li>
    <li><a routerLink="/second-component" routerLinkActive="active" ariaCurrentWhenActive="page">Second Component</a></li>
  </ul>
</nav>
<!-- The routed views render in the <router-outlet>-->
<router-outlet />
```  

## font  

1. Import custom font to `src/assets/fonts/Kanit` and `src/assets/fonts/Prompt`    

2. Create `font.css` in ` src/styles/font.css ` for keep ` @font-face {} ` code  

3. In `styles.css`  

```css

@import "tailwindcss";

@import "./styles/fonts.css";

@theme {
  --font-display: "Oswald", "sans-serif";
  --font-kanit: "Kanit", "sans-serif";
  --font-prompt: "Prompt", "san-serif";
}
body {
  font-family: "Prompt", sans-serif;
}
:root {
  --primary-color: #605dc8;
  --secondary-color: #8b89e6;
  --accent-color: #e8e7fa;
  --shadow-color: #e8e8e8;
}
```  

> ✨ ✨ ✨ Use `@theme` Auto suggestion will display in Template  

Usage : `font-kanit` and `font-prompt` class

```css
@theme {
  --font-display: "Oswald", "sans-serif";
  --font-kanit: "Kanit", "sans-serif";
  --font-prompt: "Prompt", "san-serif";
}
body {
  font-family: "Prompt", sans-serif;
}
```  

> ✨ ✨ ✨ Define `font-family: "Prompt", sans-serif;` in `body {}`  

