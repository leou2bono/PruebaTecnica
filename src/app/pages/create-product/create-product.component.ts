import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../../components/layout/layout.component';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';
import { ProductFormComponent } from '../../components/product-form/product-form.component';
@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [CommonModule, ProductFormComponent,LayoutComponent,SideMenuComponent],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss'
})
export class CreateProductComponent {

}
