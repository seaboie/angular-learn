# Tutorial

## On Youtube

[Angular 18 Full Course (part 16) - Complete Zero to Hero Angular 18 full Tutorial](https://www.youtube.com/watch?v=5FR6rvjW-AU&list=PLG6SdLSnBhdWj797VAEvABNYIBEaVQnfF&index=15)  


## 🛠️ 🛠️ 🛠️   ng-content multiple
### Send html block of code to child  

### `<ng-content select="[header]"></ng-content>`  

- Use `select="[header]"` to identify  
- Use `select="[body]"` to identify  
- Use `select="[footer]"` to identify  

> card.component.html  

```html
<div class="m-4 p-8 bg-gray-200">
    <header><ng-content select="[header]"></ng-content> </header>
    <div class="m-2 p-2 bg-gray-400">
        <ng-content select="[body]"></ng-content>
    </div>
    <div class="m-2 p-2 bg-gray-300">
        <footer>
            <ng-content select="[footer]"></ng-content>
        </footer>
    </div>
</div>
```  

## Use `card.component.html  

- Use `header` key variable to Element tag   
- Use `body` key variable to Element tag  
- Use `footer` key variable to Element tag  

> app.component.html

```html
<app-posts-list />
<app-card>
    <span header> username </span>
    <h1 body>John Doe</h1>
    <button class="btn-primary" footer>View Profile</button>
</app-card>
```



