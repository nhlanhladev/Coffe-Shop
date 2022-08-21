import { Component, OnInit } from '@angular/core';
import { Coffee } from '../../interfaces/coffee';
import { CartService } from '../../services/cart.service';
import { CheckoutService } from '../../services/checkout.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  carts: Coffee[] = [];

  constructor(
    private cartService: CartService,
    private checkoutService: CheckoutService
  ) {}

  ngOnInit(): void {
    this.getCarts();
  }

  getCarts() {
    this.carts = this.cartService.getCarts();
  }

  getTotalPrice() {
    var totalPrice = 0;
    this.carts.forEach((cart) => {
      totalPrice += cart.price;
    });
    return totalPrice;
  }

  checkOut() {
    this.checkoutService.checkOut(this.carts);
    this.carts = [];
  }
}
