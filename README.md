# Tutorial  

## On Youtube  
[Angular 19 Tutorial | Full Angular Course In One Video | Learn Angular From Scratch](https://www.youtube.com/watch?v=jYV2enNmplM&t=858s)  

## Property Binding

> app.component.ts

```ts
export class DataBindingComponent {
  name: string = "FEDLearning";
  topic: string = "Data Binding";
  image: string = "https://raw.githubusercontent.com/seaboie/images/main/images/logo/logoTransparent.png";
}
```

> app.component.html

```html
<div class="grid place-items-center">
    <p class="text-xl">2. Property Binding</p>
    <input class="input-nice" type="text" [placeholder]="topic">
    <div>
        <img [src]="image" alt="" width="80" height="80" [alt]="name">
    </div>
</div>
```
