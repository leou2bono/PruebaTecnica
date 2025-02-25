import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { StatusComponent } from '../status/status.component';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-table',
  standalone: true,
  imports: [CommonModule, TruncatePipe, StatusComponent],
  templateUrl: './product-table.component.html',
  styleUrl: './product-table.component.scss',
})
export class ProductTableComponent {
  @Input() products!: Product[];

  constructor(private productService: ProductService, private router: Router) {}

  editProduct(product: any): void {
    this.router.navigate(['/edit', product]);
  }

  deleteProduct(productId: number): void {
    this.productService.deleteProduct(productId).subscribe({
      next: () => {
        console.log('Producto eliminado');
        // Actualizar la lista de productos después de eliminar
        this.products = this.products.filter(product => product.id !== productId);
      },
      error: (error) => {
        console.error('Error al eliminar el producto:', error);
      }
    });
  }

}
