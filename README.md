# Tutorial

## On Youtube

[Angular 18 Full Course (part 16) - Complete Zero to Hero Angular 18 full Tutorial](https://www.youtube.com/watch?v=5FR6rvjW-AU&list=PLG6SdLSnBhdWj797VAEvABNYIBEaVQnfF&index=15)  


## 🛠️ 🛠️ 🛠️   ng-content

### Send html block of code to child  

### `<ng-content></ng-content>`  

> card.component.html  

```html
<div class="m-4 p-8 bg-gray-200">
    <p>card works!</p>
    <ng-content></ng-content>
</div>
```  

## Use `card.component.html  

> app.component.html

```html
<<app-posts-list />
<app-card>
    <h2>John Doe</h2>
    <p>01/08/25</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, at accusamus. Temporibus obcaecati esse rem. Commodi vitae inventore sed corrupti, quasi iure, illo, adipisci consequuntur quas maxime quod modi dolore.</p>
</app-card>
```

> posts-list.component.html  

```html
<p>posts-list works!</p>

<app-card>
    <h2>Blog Post Title 1</h2>
    <p>04/08/24</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora amet sapiente atque consequatur rerum dolore facilis modi aut ab molestias numquam totam veritatis at eius assumenda molestiae, reprehenderit, sequi quidem.</p>
</app-card>å
```  



