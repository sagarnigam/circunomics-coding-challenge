import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'product-list',
    loadChildren: () => import('./components/product-list/product-list.module').then(m => m.ProductListModule),
  },
  {
    path: 'product-details/:id',
    loadChildren: () => import('./components/product-details/product-details.module').then(m => m.ProductDetailsModule),
  },
  {
    path: '',
    redirectTo: '/product-list',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/product-list',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
