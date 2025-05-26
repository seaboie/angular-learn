# Tutorial  

## On Youtube  
[Angular 19 Tutorial | Full Angular Course In One Video | Learn Angular From Scratch](https://www.youtube.com/watch?v=jYV2enNmplM&t=858s)  

## Property Binding

> app.component.ts

```ts
export class DataBindingComponent {
  name: string = 'FEDLearning';
  topic: string = 'Data Binding';
}
```

> app.component.html

```html
<div class="w-full h-full grid place-items-center">
    <h1 class="my-4 text-xl font-semibold" >One Way Data Binding</h1>
    <div>
        <p>1.Interpolation</p>
        <p> <b>{{ topic }}</b> from {{ name }} </p>
    </div>
</div>
```
