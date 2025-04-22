import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  brandLogo: string = 'Angular Router App';
  brandLogoLink: string = '';
  baseUrlImageRight: string =
    'https://raw.githubusercontent.com/seaboie/images/main/images/logo/logo.jpg';

  menus = [
    { id: 1, title: 'หน้าแรก', routerLink: '' },
    { id: 2, title: 'หน้าสอง', routerLink: '/second-component' },
    { id: 3, title: 'หน้าสาม', routerLink: '/third-component' },
    { id: 4, title: 'หน้าสี่', routerLink: '/forth-component' },
  ];
}
