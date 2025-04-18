import { Component, input } from '@angular/core';
import { ProductModel } from '../../../models/products.model';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButtonComponent, CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  product = input.required<ProductModel>();
}
