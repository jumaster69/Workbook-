import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { CatalogoComponent } from './catalogo.component';
import { Product } from '../models/product.model';

/**
 * Pruebas unitarias del modulo de Articulos y Caracteristicas.
 * Verifican la carga de productos y el filtrado por categoria.
 */
describe('CatalogoComponent', () => {
  let httpMock: HttpTestingController;

  const productosFalsos: Product[] = [
    {
      id: 1, title: 'Producto A', description: 'desc', price: 1000,
      discountPercentage: 10, rating: 4.5, stock: 5, brand: 'X',
      category: 'Celulares', thumbnail: 'a.svg', images: ['a.svg'],
    },
    {
      id: 2, title: 'Producto B', description: 'desc', price: 2000,
      discountPercentage: 0, rating: 4.0, stock: 0, brand: 'Y',
      category: 'Audio', thumbnail: 'b.svg', images: ['b.svg'],
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CatalogoComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('debe crear el componente', () => {
    const fixture = TestBed.createComponent(CatalogoComponent);
    expect(fixture.componentInstance).toBeTruthy();
    httpMock.expectOne('assets/products.json').flush(productosFalsos);
  });

  it('debe cargar los productos y armar las categorias', () => {
    const fixture = TestBed.createComponent(CatalogoComponent);
    fixture.detectChanges();
    httpMock.expectOne('assets/products.json').flush(productosFalsos);
    expect(fixture.componentInstance.productos.length).toBe(2);
    expect(fixture.componentInstance.categorias).toContain('Celulares');
  });

  it('debe filtrar por categoria seleccionada', () => {
    const fixture = TestBed.createComponent(CatalogoComponent);
    fixture.detectChanges();
    httpMock.expectOne('assets/products.json').flush(productosFalsos);
    fixture.componentInstance.categoriaSeleccionada = 'Audio';
    expect(fixture.componentInstance.productosFiltrados.length).toBe(1);
    expect(fixture.componentInstance.productosFiltrados[0].title).toBe('Producto B');
  });

  it('debe calcular el precio con descuento', () => {
    const fixture = TestBed.createComponent(CatalogoComponent);
    expect(fixture.componentInstance.precioFinal(productosFalsos[0])).toBe(900);
    httpMock.expectOne('assets/products.json').flush(productosFalsos);
  });

  afterEach(() => httpMock.verify());
});
