import { Injectable, signal } from '@angular/core';
import { ProductModel } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<ProductModel[]>([]);

  addToCart(product: ProductModel) {
    this.cart.set([...this.cart(), product]);
  }

  constructor() { }
}
