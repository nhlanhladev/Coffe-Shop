import { Component, OnInit } from '@angular/core';
import { CoffeeService } from '../../services/coffee.service';
import { Coffee } from '../../interfaces/coffee';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  coffeesData: Coffee[] = [];
  alert: boolean = false;

  show = false;
  autohide = true;

  constructor(
    private coffeeService: CoffeeService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getCoffees();
  }

  // get all products listx
  getCoffees() {
    this.coffeeService.getAllCoffees().then((coffees: Coffee[]) => {
      this.coffeesData = coffees;
    });
  }
  // add to cart all items clicked
  addToCart(coffee: Coffee) {
    this.cartService.addToCart(coffee);
    console.log(coffee);
    this.alert = true;
  }
  closeAlert() {
    this.alert = false;
  }
}
