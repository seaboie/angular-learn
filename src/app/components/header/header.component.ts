import { Component } from '@angular/core';
import { IconProfileComponent } from "../../widgets/header/icon-profile/icon-profile.component";
import { MenuTopComponent } from "../../widgets/header/menu-top/menu-top.component";
import { HeaderBrandComponent } from "../../widgets/header/header-brand/header-brand.component";

@Component({
  selector: 'app-header',
  imports: [IconProfileComponent, MenuTopComponent, HeaderBrandComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {}
