import { Component, input } from '@angular/core';
import { ProductModel } from '../../../models/products.model';

@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  item = input.required<ProductModel>();
}
