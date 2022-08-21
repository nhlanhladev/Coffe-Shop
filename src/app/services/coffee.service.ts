import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { COFFEES } from '../interfaces/mock-coffees';
import { Coffee } from '../interfaces/coffee';

@Injectable({
  providedIn: 'root',
})
export class CoffeeService {
  url = 'http://localhost:3000/products';
  coffees = COFFEES;
  data?: Coffee[];

  constructor(private httpClient: HttpClient) {}

  async getAllCoffees(): Promise<Coffee[]> {
    this.storeMockCoffees();
    return (this.data = JSON.parse(localStorage.getItem('coffees') || '{}'));
  }

  private storeMockCoffees() {
    localStorage.setItem('coffees', JSON.stringify(this.coffees));
  }
}
