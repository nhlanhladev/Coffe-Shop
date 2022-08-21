import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { PointsComponent } from './components/points/points.component';

const routes: Routes = [
  { path: '', redirectTo: '/productsList', pathMatch: 'full' },

  { path: 'productsList', component: ProductListComponent },
  { path: 'Cart', component: CartComponent },
  { path: 'Points', component: PointsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
