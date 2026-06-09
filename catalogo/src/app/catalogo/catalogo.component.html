<section class="catalogo">
  <header class="catalogo-encabezado">
    <h1>Catalogo de productos</h1>
    <p>Explora nuestros articulos electronicos. Haz clic en la imagen para ver el detalle.</p>
  </header>

  <!-- Filtro por categoria (busqueda por caracteristica) -->
  <div class="filtros" *ngIf="!cargando && !error">
    <label for="filtroCategoria">Categoria:</label>
    <select id="filtroCategoria" [(ngModel)]="categoriaSeleccionada">
      <option *ngFor="let cat of categorias" [value]="cat">{{ cat }}</option>
    </select>
    <span class="conteo">{{ productosFiltrados.length }} producto(s)</span>
  </div>

  <!-- Estados de carga y error -->
  <p class="mensaje" *ngIf="cargando">Cargando productos...</p>
  <p class="mensaje error" *ngIf="error">
    No fue posible cargar el catalogo. Revisa que el archivo products.json exista en la carpeta assets.
  </p>

  <!-- Grilla de productos -->
  <div class="grilla" *ngIf="!cargando && !error">
    <article class="tarjeta" *ngFor="let producto of productosFiltrados">
      <!-- Al hacer clic en la imagen se amplia la descripcion del producto -->
      <button
        type="button"
        class="tarjeta-imagen"
        (click)="verDetalle(producto)"
        [attr.aria-label]="'Ver detalle de ' + producto.title"
      >
        <img [src]="producto.thumbnail" [alt]="producto.title" />
        <span class="ver-mas">Ver detalle</span>
      </button>

      <div class="tarjeta-cuerpo">
        <span class="tarjeta-categoria">{{ producto.category }}</span>
        <h3 class="tarjeta-titulo">{{ producto.title }}</h3>
        <p class="tarjeta-marca">{{ producto.brand }}</p>

        <div class="tarjeta-precio">
          <span class="precio">{{ precioFinal(producto) | currency:'COP':'symbol-narrow':'1.0-0' }}</span>
          <span class="descuento" *ngIf="producto.discountPercentage > 0">
            -{{ producto.discountPercentage }}%
          </span>
        </div>

        <p class="tarjeta-stock" [class.agotado]="producto.stock === 0">
          {{ producto.stock > 0 ? 'Stock: ' + producto.stock : 'Agotado' }}
        </p>
      </div>
    </article>
  </div>
</section>

<!-- Ventana de detalle: solo se muestra si hay un producto seleccionado -->
<app-product-detail
  *ngIf="productoSeleccionado"
  [product]="productoSeleccionado"
  (cerrar)="cerrarDetalle()"
></app-product-detail>
