import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-top',
  imports: [RouterLink],
  templateUrl: './menu-top.component.html',
  styleUrl: './menu-top.component.css'
})
export class MenuTopComponent {
  menus = [
    { id: 1, title: 'หน้าแรก', routerLink: '' },
    { id: 2, title: 'หน้าสอง', routerLink: '/second-component' },
    { id: 3, title: 'หน้าสาม', routerLink: '/third-component' },
    { id: 4, title: 'หน้าสี่', routerLink: '/forth-component' },
  ];
}
