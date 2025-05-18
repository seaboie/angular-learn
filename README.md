# Tutorial

## On Youtube

[Angular 18 Full Course (Part 18) - Complete Zero to Hero Angular 18 full Tutorial](https://www.youtube.com/watch?v=QqNsMoDgy9A&list=PLG6SdLSnBhdWj797VAEvABNYIBEaVQnfF&index=12)  


## 🛠️ 🛠️ 🛠️  ngDoCheck
### Call during every change detection




> profile.component.ts

```ts
@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  ngDoCheck(): void {
    console.log('ngDoCheck hook triggered');
  }
  
}
```  
