# Tutorial

## On Youtube

[Angular 18 Full Course (part 7) - Complete Zero to Hero Angular full Tutorial](https://www.youtube.com/watch?v=R3y1FvJihUE&list=PLG6SdLSnBhdWj797VAEvABNYIBEaVQnfF&index=24)

## 🛠️ 🛠️ 🛠️ ng-template-outlet

> ts

```ts
@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, NgTemplateOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
```

> html

```html
<div class=" p-20">
    <h1 class="font-semibold text-2xl">ng-template-outlet</h1>
    
    <ng-template #getButton>
        <button class="btn-primary">Join now</button>
        <button class="btn-primary">Join now</button>
        <button class="btn-primary">Join now</button>
        <button class="btn-primary">Join now</button>
        <button class="btn-primary">Join now</button>
        <hr>
    </ng-template>

    <div [ngTemplateOutlet]="getButton">
        <h5>Sidebar</h5>
    </div>
    <div [ngTemplateOutlet]="getButton">
        <h5>Hero</h5>
    </div>
    <div [ngTemplateOutlet]="getButton">
        <h5>Footer</h5>
    </div>

</div>
```  

- import `NgTemplateOutlet`  
- Use for reuse : `<ng-template></ng-template>`  
- Call it : `<div [ngTemplateOutlet]="getButton">`  
- `<ng-template></ng-template>` will used in `<div [ngTemplateOutlet]="getButton">...</div>` by call `variable template` : `#getButton`  
