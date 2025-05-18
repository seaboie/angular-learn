# Tutorial

## On Youtube

[Angular 18 Full Course (Part 19) - Complete Zero to Hero Angular 18 full Tutorial](https://www.youtube.com/watch?v=7mtAFR1g_M0&list=PLG6SdLSnBhdWj797VAEvABNYIBEaVQnfF&index=12)  


## 🛠️ 🛠️ 🛠️  ngAfterViewInit
### Call during rendering all component success loading


> profile.component.ts

```ts
@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  ngAfterViewInit(): void {
    console.log('Ng AfterViewInit triggered');
  }
  
}
```  
