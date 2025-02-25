import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent implements OnInit {

  productForm: FormGroup;
  productId: number | null = null;

  constructor(private fb: FormBuilder , private productService: ProductService, private route: ActivatedRoute,private router: Router) {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      price: ['', [Validators.required, Validators.min(0)]],
      categoryId: ['', Validators.required],
      images : [['https://placeimg.com/640/480/any']]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.productId = +id;
        this.loadProduct(this.productId);
      }
    });
  }

  loadProduct(id: number): void {
    // Lógica para cargar el producto desde el servicio y llenar el formulario
    this.productService.getProduct(id).subscribe(product => {
      this.productForm.patchValue(product);
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const productData = this.productForm.value;
      if (this.productId) {
        this.productService.updateProduct(this.productId, productData).subscribe({
          next: (response) => {
            console.log('Producto actualizado:', response);
            this.router.navigate(['/']);
          },
          error: (error) => {
            console.error('Error al actualizar el producto:', error);
          }
        });
      } else {
        this.productService.addProduct(productData).subscribe({
          next: (response) => {
            console.log('Producto guardado:', response);
            this.router.navigate(['/']);
          },
          error: (error) => {
            console.error('Error al guardar el producto:', error);
          }
        });
      }
    } else {
      console.log('Formulario no válido');
    }
  
  }
}
