import { Injectable } from '@angular/core';
import { Coffee } from '../interfaces/coffee';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}
  cart: Coffee[] = [];

  addToCart(coffee: Coffee) {
    this.cart = this.getCarts();
    this.cart.push(coffee);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  getCarts() {
    return (this.cart = JSON.parse(localStorage.getItem('cart') || '[]'));
  }
}
