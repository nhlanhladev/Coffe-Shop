import { Injectable } from '@angular/core';
import { Coffee } from '../interfaces/coffee';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  checkOuts: Coffee[] = [];

  constructor() {}

  checkOut(carts: Coffee[]) {
    this.checkOuts = this.getCheckOuts();
    this.checkOuts.push.apply(this.checkOuts, carts);
    console.log(this.checkOuts);
    console.log(carts);
    localStorage.setItem('checkOuts', JSON.stringify(this.checkOuts));
    localStorage.setItem('cart', JSON.stringify([]));
  }

  getCheckOuts() {
    return (this.checkOuts = JSON.parse(
      localStorage.getItem('checkOuts') || '[]'
    ));
  }
}
