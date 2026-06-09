import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { ProductDetailComponent } from './product-detail/product-detail.component';

/**
 * Modulo de Articulos y Caracteristicas (Vitrina / Catalogo).
 * Renderiza de forma dinamica los productos del catalogo mostrando
 * nombre, categoria, precio, stock e imagen. Al hacer clic en la imagen
 * de un producto se amplia su informacion en una ventana de detalle.
 */
@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductDetailComponent],
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
})
export class CatalogoComponent implements OnInit {
  /** Todos los productos cargados desde el JSON. */
  productos: Product[] = [];

  /** Categorias disponibles para el filtro. */
  categorias: string[] = [];

  /** Categoria seleccionada en el filtro ('Todas' = sin filtro). */
  categoriaSeleccionada = 'Todas';

  /** Producto cuyo detalle se esta mostrando (null = ninguno). */
  productoSeleccionado: Product | null = null;

  /** Estado de carga para mostrar un mensaje mientras llegan los datos. */
  cargando = true;
  error = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProductos().subscribe({
      next: (data) => {
        this.productos = data;
        this.categorias = ['Todas', ...new Set(data.map((p) => p.category))];
        this.cargando = false;
      },
      error: () => {
        this.error = true;
        this.cargando = false;
      },
    });
  }

  /** Lista de productos visibles segun la categoria seleccionada. */
  get productosFiltrados(): Product[] {
    if (this.categoriaSeleccionada === 'Todas') {
      return this.productos;
    }
    return this.productos.filter((p) => p.category === this.categoriaSeleccionada);
  }

  /** Abre el detalle del producto (se llama al hacer clic en la imagen). */
  verDetalle(producto: Product): void {
    this.productoSeleccionado = producto;
  }

  /** Cierra la ventana de detalle. */
  cerrarDetalle(): void {
    this.productoSeleccionado = null;
  }

  /** Precio con descuento aplicado, para mostrar en la tarjeta. */
  precioFinal(producto: Product): number {
    return Math.round(producto.price * (1 - producto.discountPercentage / 100));
  }
}
