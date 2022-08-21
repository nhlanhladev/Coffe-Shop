import { Component, OnInit } from '@angular/core';
import { Coffee } from '../../interfaces/coffee';
import { CartService } from '../../services/cart.service';
import { CheckoutService } from '../../services/checkout.service';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css'],
})
export class PointsComponent implements OnInit {
  checkOuts: Coffee[] = [];
  alert: boolean = false;
  message: string = '';
  constructor(private checkoutService: CheckoutService) {}

  ngOnInit(): void {
    this.getCheckOuts();
  }

  getCheckOuts() {
    this.checkOuts = this.checkoutService.getCheckOuts();
  }

  getTotalPrice() {
    var totalPrice = 0;
    this.checkOuts.forEach((cart) => {
      totalPrice += cart.price;
    });
    return totalPrice;
  }

  float2int(value: number) {
    return value | 0;
  }

  getTotalPoints() {
    let checkoutCount: number = this.checkOuts.length;
    let pointsQualified: number = this.float2int(checkoutCount / 10);
    let pointsPerProduct: number = 1000;
    let totalIndividualPoints: number = 0;

    for (let i = 0; i < pointsQualified; i++) {
      totalIndividualPoints = totalIndividualPoints + pointsPerProduct;
    }

    return totalIndividualPoints;
  }

  redeem(points: number) {
    this.message =
      'Congratulations you have redeemed your ' +
      points +
      ' points. You have earned R ' +
      this.calculateCashBack(points);
    this.alert = true;
  }

  calculateCashBack(points: number) {
    return (points / 1000) * 30;
  }

  closeAlert() {
    this.alert = false;
  }
}
