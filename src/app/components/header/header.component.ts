import { Component, computed, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [PrimaryButtonComponent],
})
export class HeaderComponent {
  cartService = inject(CartService);

  get cartLabel() {
    return `Cart ( ${this.cartService.cart().length} )`;
  }

}
