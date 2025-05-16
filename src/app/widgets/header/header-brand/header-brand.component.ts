import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-brand',
  imports: [RouterLink],
  templateUrl: './header-brand.component.html',
  styleUrl: './header-brand.component.css'
})
export class HeaderBrandComponent {
  brandLogo: string = 'Angular Router App';
  brandLogoLink: string = '';
}
