import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

/**
 * Ventana de detalle (modal) que amplia la informacion del producto.
 * Se muestra cuando el usuario hace clic en la imagen de un articulo
 * dentro del catalogo, mostrando su descripcion completa y caracteristicas.
 */
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  /** Producto a mostrar en el detalle. */
  @Input({ required: true }) product!: Product;

  /** Evento que avisa al catalogo que se debe cerrar el detalle. */
  @Output() cerrar = new EventEmitter<void>();

  /** Precio con el descuento aplicado. */
  get precioConDescuento(): number {
    return Math.round(this.product.price * (1 - this.product.discountPercentage / 100));
  }

  /** Indica si el producto tiene unidades disponibles. */
  get hayStock(): boolean {
    return this.product.stock > 0;
  }

  onCerrar(): void {
    this.cerrar.emit();
  }
}
