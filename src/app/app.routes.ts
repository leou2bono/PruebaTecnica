import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'create', component: CreateProductComponent},
  { path: 'edit/:id', component: ProductFormComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
