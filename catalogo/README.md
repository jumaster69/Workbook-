# ClickTecnology - Módulo de Artículos y Características (Vitrina / Catálogo)

**Proyecto Politécnico Gran Colombiano**

## Integrantes del Equipo
- Carolina Sotelo Huertas
- Brayan
- Jennifer Viviana Samper Torbello
- Juan Angel Torres Florez
- Jorge Torres
- Daniel Torres

---


Este proyecto implementa el **módulo de artículos y características** de la tienda
virtual *ClickTecnology*: una vitrina que muestra de forma dinámica los productos
electrónicos del catálogo (nombre, categoría, precio, stock e imagen) y que, al
hacer clic en la imagen de un producto, **amplía su descripción** en una ventana
de detalle.

## Tecnologías

- **Angular 18** (componentes *standalone*)
- **TypeScript**
- Datos simulados con un **archivo JSON local** (`src/assets/products.json`),
  con la estructura de producto (DummyJSON):
  `id, title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images`.

## Cómo ejecutarlo

Necesitas tener instalado **Node.js 18 o superior**.

```bash
# 1. Instalar dependencias
npm install

# 2. Levantar la aplicación (abre el navegador en http://localhost:4200)
npm start
```

Para generar la versión de producción:

```bash
npm run build
```

Para correr las pruebas unitarias:

```bash
npm test
```

## Estructura del módulo

```
src/
├── app/
│   ├── app.component.ts              # Shell con el encabezado de la marca
│   ├── app.config.ts                 # Configuración (habilita HttpClient)
│   ├── models/
│   │   └── product.model.ts          # Interface Product (modelo de datos)
│   ├── services/
│   │   └── product.service.ts        # Lee products.json y entrega los datos
│   └── catalogo/
│       ├── catalogo.component.*       # Vitrina: grilla de productos + filtro
│       ├── catalogo.component.spec.ts # Pruebas unitarias
│       └── product-detail/
│           └── product-detail.component.*  # Modal de detalle (clic en imagen)
├── assets/
│   ├── products.json                 # 24 productos electrónicos (mock)
│   └── img/                          # Íconos SVG por categoría
└── ...
```

## Funcionalidades implementadas

- Renderizado dinámico de **24 productos** (mínimo exigido: 20).
- Cada artículo muestra **nombre, categoría, marca, precio, descuento y stock**.
- **Filtro por categoría** (búsqueda por característica).
- Al **hacer clic en la imagen** se abre el detalle con la **descripción ampliada**,
  calificación, disponibilidad y características.
- Diseño **responsivo** (se adapta a celular, tableta y computador).
- Manejo de estados de **carga** y **error**.
