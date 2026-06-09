import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from '../models/product.model';

/**
 * Servicio del catalogo. Centraliza el acceso a los datos de productos.
 * En esta entrega los datos provienen de un archivo JSON local (mock)
 * que simula la base de datos. Mas adelante solo habria que cambiar
 * la URL por la del backend real sin tocar los componentes.
 */
@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly dataUrl = 'assets/products.json';

  constructor(private http: HttpClient) {}

  /** Devuelve la lista completa de productos del catalogo. */
  getProductos(): Observable<Product[]> {
    return this.http.get<Product[]>(this.dataUrl);
  }

  /** Devuelve un producto por su id (o undefined si no existe). */
  getProductoPorId(id: number): Observable<Product | undefined> {
    return this.getProductos().pipe(
      map((productos) => productos.find((p) => p.id === id))
    );
  }

  /** Devuelve la lista de categorias unicas presentes en el catalogo. */
  getCategorias(): Observable<string[]> {
    return this.getProductos().pipe(
      map((productos) => [...new Set(productos.map((p) => p.category))].sort())
    );
  }
}
