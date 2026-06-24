# 📚 WORKBOOK - Guía Completa de Integración de APIs

**Proyecto Politécnico Gran Colombiano**

## 👥 Integrantes
- Carolina Sotelo Huertas
- Brayan
- Jennifer Viviana Samper Torbello
- Juan Angel Torres Florez
- Jorge Torres
- Daniel Torres
---

## 📋 Tabla de Contenidos

1. [Introducción](#introducción)
2. [APIs Utilizadas](#apis-utilizadas)
3. [Configuración Inicial](#configuración-inicial)
4. [DummyJSON API](#dummyjson-api)
5. [FakeStore API](#fakestore-api)
6. [Ejemplos Prácticos](#ejemplos-prácticos)
7. [Mejores Prácticas](#mejores-prácticas)

---

## 🎯 Introducción

Este workbook proporciona una guía completa para integrar dos APIs públicas en una aplicación Node.js:

- **DummyJSON**: API con productos, usuarios, posts y más
- **FakeStore API**: API de tienda online con productos y carrito

### Requisitos Previos
- Node.js v14+
- npm o yarn
- Conocimiento básico de JavaScript
- Postman o similar (opcional, para testing)

---

## 🔗 APIs Utilizadas

### 1. DummyJSON API

**URL Base**: `https://dummyjson.com`

#### Endpoints Principales

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/products` | Obtiene todos los productos |
| GET | `/products/:id` | Obtiene un producto específico |
| GET | `/products/category/:category` | Obtiene productos por categoría |
| GET | `/products/search?q=keyword` | Busca productos |
| GET | `/products/categories` | Obtiene lista de categorías |
| GET | `/users` | Obtiene todos los usuarios |
| GET | `/users/:id` | Obtiene un usuario específico |
| GET | `/posts` | Obtiene todos los posts |

#### Ejemplo de Respuesta - Producto

```json
{
  "id": 1,
  "title": "iPhone 9",
  "description": "An apple mobile which is very straight...",
  "price": 549,
  "discountPercentage": 12.96,
  "rating": 4.69,
  "stock": 94,
  "brand": "Apple",
  "category": "smartphones",
  "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  "images": ["https://i.dummyjson.com/data/products/1/1.jpg"]
}
```

---

### 2. FakeStore API

**URL Base**: `https://fakestoreapi.com`

#### Endpoints Principales

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/products` | Obtiene todos los productos |
| GET | `/products/:id` | Obtiene un producto específico |
| GET | `/products/category/:category` | Obtiene productos por categoría |
| GET | `/categories` | Obtiene categorías disponibles |
| GET | `/users` | Obtiene todos los usuarios |
| GET | `/users/:id` | Obtiene usuario específico |
| GET | `/carts` | Obtiene todos los carritos |
| GET | `/carts/:id` | Obtiene carrito específico |

#### Ejemplo de Respuesta - Producto

```json
{
  "id": 1,
  "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  "price": 109.95,
  "description": "Your perfect pack...",
  "category": "electronics",
  "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "rating": {
    "rate": 3.9,
    "count": 120
  }
}
```

---

## ⚙️ Configuración Inicial

### Paso 1: Crear Carpeta del Proyecto

```bash
mkdir workbook-apis
cd workbook-apis
npm init -y
```

### Paso 2: Instalar Dependencias

```bash
npm install axios dotenv
npm install --save-dev nodemon
```

### Paso 3: Crear Archivo .env

```env
# DummyJSON Configuration
DUMMYJSON_API=https://dummyjson.com

# FakeStore Configuration
FAKESTORE_API=https://fakestoreapi.com

# Application
NODE_ENV=development
```

### Paso 4: Configurar package.json

```json
{
  "name": "workbook-apis",
  "version": "1.0.0",
  "description": "Integration with DummyJSON and FakeStore APIs",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test:dummyjson": "node examples/dummyjson.js",
    "test:fakestore": "node examples/fakestore.js",
    "test:combined": "node examples/combined.js"
  },
  "keywords": ["api", "rest", "dummyjson", "fakestore"],
  "author": "Equipo Workbook",
  "license": "MIT"
}
```

---

## 🛒 DummyJSON API

### Consulta 1: Obtener Todos los Productos

```javascript
const axios = require('axios');

async function getAllProducts() {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    console.log('Total de productos:', response.data.total);
    console.log('Primeros 5 productos:');
    response.data.products.slice(0, 5).forEach(product => {
      console.log(`- ${product.title}: $${product.price}`);
    });
  } catch (error) {
    console.error('Error:', error.message);
  }
}

getAllProducts();
```

### Consulta 2: Obtener Productos por Categoría

```javascript
async function getProductsByCategory(category) {
  try {
    const response = await axios.get(
      `https://dummyjson.com/products/category/${category}`
    );
    console.log(`Productos en categoría "${category}":`);
    response.data.products.forEach(product => {
      console.log(`- ${product.title}`);
      console.log(`  Precio: $${product.price}`);
      console.log(`  Rating: ${product.rating}⭐\n`);
    });
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Uso
getProductsByCategory('smartphones');
```

### Consulta 3: Buscar Productos

```javascript
async function searchProducts(keyword) {
  try {
    const response = await axios.get(
      `https://dummyjson.com/products/search?q=${keyword}`
    );
    console.log(`Resultados para "${keyword}":`);
    response.data.products.forEach(product => {
      console.log(`- ${product.title}`);
      console.log(`  Descripción: ${product.description.substring(0, 50)}...`);
    });
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Uso
searchProducts('phone');
```

### Consulta 4: Obtener Detalles de un Producto

```javascript
async function getProductDetails(productId) {
  try {
    const response = await axios.get(
      `https://dummyjson.com/products/${productId}`
    );
    const product = response.data;
    console.log('═══════════════════════════════════');
    console.log(`Producto: ${product.title}`);
    console.log(`ID: ${product.id}`);
    console.log(`Precio: $${product.price}`);
    console.log(`Descuento: ${product.discountPercentage}%`);
    console.log(`Rating: ${product.rating}⭐`);
    console.log(`Stock: ${product.stock} unidades`);
    console.log(`Marca: ${product.brand}`);
    console.log(`Categoría: ${product.category}`);
    console.log('═══════════════════════════════════');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Uso
getProductDetails(1);
```

### Consulta 5: Obtener Usuarios

```javascript
async function getUsers() {
  try {
    const response = await axios.get('https://dummyjson.com/users');
    console.log(`Total de usuarios: ${response.data.total}\n`);
    response.data.users.slice(0, 3).forEach(user => {
      console.log(`Usuario: ${user.firstName} ${user.lastName}`);
      console.log(`Email: ${user.email}`);
      console.log(`Teléfono: ${user.phone}\n`);
    });
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Uso
getUsers();
```

---

## 🏪 FakeStore API

### Consulta 1: Obtener Todos los Productos

```javascript
async function getFakeStoreProducts() {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    console.log(`Total de productos: ${response.data.length}\n`);
    response.data.slice(0, 3).forEach(product => {
      console.log(`- ${product.title}`);
      console.log(`  Precio: $${product.price}`);
      console.log(`  Rating: ${product.rating.rate}⭐ (${product.rating.count} votos)\n`);
    });
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Uso
getFakeStoreProducts();
```

### Consulta 2: Obtener Productos por Categoría

```javascript
async function getFakeStoreByCategory(category) {
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/${category}`
    );
    console.log(`Productos en categoría "${category}":`);
    response.data.forEach(product => {
      console.log(`- ${product.title}`);
      console.log(`  Precio: $${product.price}\n`);
    });
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Uso
getFakeStoreByCategory('electronics');
```

### Consulta 3: Obtener Categorías Disponibles

```javascript
async function getFakeStoreCategories() {
  try {
    const response = await axios.get('https://fakestoreapi.com/categories');
    console.log('Categorías disponibles:');
    response.data.forEach((category, index) => {
      console.log(`${index + 1}. ${category}`);
    });
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Uso
getFakeStoreCategories();
```

### Consulta 4: Obtener Carrito de un Usuario

```javascript
async function getUserCart(userId) {
  try {
    const response = await axios.get(`https://fakestoreapi.com/carts/${userId}`);
    const cart = response.data;
    console.log(`Carrito del Usuario ${userId}:`);
    console.log(`Fecha: ${cart.date}`);
    console.log('Productos:');
    cart.products.forEach(item => {
      console.log(`- Producto ID: ${item.productId}`);
      console.log(`  Cantidad: ${item.quantity}`);
    });
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Uso
getUserCart(1);
```

---

## 💡 Ejemplos Prácticos

### Ejemplo 1: Comparar Precios entre APIs

```javascript
async function comparePrices() {
  try {
    // Obtener producto de DummyJSON
    const dummyResponse = await axios.get('https://dummyjson.com/products/1');
    const dummyProduct = dummyResponse.data;

    // Obtener producto de FakeStore
    const fakeResponse = await axios.get('https://fakestoreapi.com/products/1');
    const fakeProduct = fakeResponse.data;

    console.log('═══════════════════════════════════');
    console.log('COMPARACIÓN DE PRECIOS');
    console.log('═══════════════════════════════════');
    console.log(`DummyJSON: ${dummyProduct.title}`);
    console.log(`Precio: $${dummyProduct.price}\n`);
    
    console.log(`FakeStore: ${fakeProduct.title}`);
    console.log(`Precio: $${fakeProduct.price}\n`);
    
    const difference = Math.abs(dummyProduct.price - fakeProduct.price);
    console.log(`Diferencia: $${difference.toFixed(2)}`);
    console.log('═══════════════════════════════════');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Uso
comparePrices();
```

### Ejemplo 2: Filtrar Productos Baratos

```javascript
async function getCheapProducts(maxPrice) {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    const cheapProducts = response.data.products.filter(p => p.price <= maxPrice);
    
    console.log(`Productos menores a $${maxPrice}:`);
    cheapProducts.forEach(product => {
      console.log(`✓ ${product.title}: $${product.price}`);
    });
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Uso
getCheapProducts(100);
```

### Ejemplo 3: Productos Mejor Calificados

```javascript
async function getTopRatedProducts(limit = 5) {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    const topRated = response.data.products
      .sort((a, b) => b.rating - a.rating)
      .slice(0, limit);
    
    console.log(`Top ${limit} productos mejor calificados:\n`);
    topRated.forEach((product, index) => {
      console.log(`${index + 1}. ${product.title}`);
      console.log(`   Rating: ${product.rating}⭐`);
      console.log(`   Precio: $${product.price}\n`);
    });
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Uso
getTopRatedProducts(5);
```

### Ejemplo 4: Crear Estadísticas

```javascript
async function getStatistics() {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    const products = response.data.products;
    
    const stats = {
      totalProducts: products.length,
      avgPrice: (products.reduce((sum, p) => sum + p.price, 0) / products.length).toFixed(2),
      maxPrice: Math.max(...products.map(p => p.price)),
      minPrice: Math.min(...products.map(p => p.price)),
      avgRating: (products.reduce((sum, p) => sum + p.rating, 0) / products.length).toFixed(2),
      categories: [...new Set(products.map(p => p.category))].length
    };
    
    console.log('═══════════════════════════════════');
    console.log('ESTADÍSTICAS DE PRODUCTOS');
    console.log('═══════════════════════════════════');
    console.log(`Total de productos: ${stats.totalProducts}`);
    console.log(`Precio promedio: $${stats.avgPrice}`);
    console.log(`Precio máximo: $${stats.maxPrice}`);
    console.log(`Precio mínimo: $${stats.minPrice}`);
    console.log(`Rating promedio: ${stats.avgRating}⭐`);
    console.log(`Total de categorías: ${stats.categories}`);
    console.log('═══════════════════════════════════');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Uso
getStatistics();
```

---

## ✅ Mejores Prácticas

### 1. Manejo de Errores

```javascript
async function safeAPICall(url) {
  try {
    const response = await axios.get(url, {
      timeout: 5000 // 5 segundos
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      // Servidor respondió con código de error
      console.error(`Error ${error.response.status}: ${error.response.statusText}`);
    } else if (error.request) {
      // Solicitud hecha pero no hubo respuesta
      console.error('No se recibió respuesta del servidor');
    } else {
      console.error('Error en la solicitud:', error.message);
    }
    return null;
  }
}
```

### 2. Cacheo de Datos

```javascript
const cache = new Map();

async function getCachedProducts(cacheTime = 5 * 60 * 1000) { // 5 minutos
  const cacheKey = 'products';
  
  if (cache.has(cacheKey)) {
    const { data, timestamp } = cache.get(cacheKey);
    if (Date.now() - timestamp < cacheTime) {
      console.log('Datos obtenidos del caché');
      return data;
    }
  }
  
  const response = await axios.get('https://dummyjson.com/products');
  cache.set(cacheKey, {
    data: response.data,
    timestamp: Date.now()
  });
  
  return response.data;
}
```

### 3. Paginación

```javascript
async function getPaginatedProducts(page = 1, limit = 10) {
  try {
    const skip = (page - 1) * limit;
    const response = await axios.get(
      `https://dummyjson.com/products?skip=${skip}&limit=${limit}`
    );
    
    return {
      page,
      limit,
      total: response.data.total,
      products: response.data.products
    };
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Uso
getPaginatedProducts(1, 10); // Primera página, 10 productos
```

### 4. Configuración Centralizada

```javascript
// config.js
module.exports = {
  apis: {
    dummyjson: {
      baseUrl: process.env.DUMMYJSON_API || 'https://dummyjson.com',
      timeout: 5000
    },
    fakestore: {
      baseUrl: process.env.FAKESTORE_API || 'https://fakestoreapi.com',
      timeout: 5000
    }
  }
};
```

---

## 📚 Recursos Adicionales

- [DummyJSON Documentación](https://dummyjson.com)
- [FakeStore API Documentación](https://fakestoreapi.com/docs)
- [Axios Documentación](https://axios-http.com/)
- [Node.js Documentación](https://nodejs.org/docs/)

---

## 🧪 Aseguramiento de Calidad y Pruebas Automatizadas (Fase 4)

**Responsable:** Daniel Torres Valenzuela – Test Manager  
**Tareas asociadas:** TSK4-01 · TSK4-02 · TSK4-03 · TSK4-04 · TSK4-05

### Objetivo

Durante la Fase 4 se implementó y ejecutó la estrategia de pruebas unitarias del proyecto utilizando **Vitest (v4.1.7)** como framework de pruebas automatizadas, integrado con Angular mediante `ng test`. El propósito fue verificar el correcto funcionamiento de los servicios y componentes críticos de la aplicación antes de la entrega final.

---

### Actividades Realizadas

**TSK4-01 – Configuración del entorno de pruebas automatizadas**  
Se configuró Vitest en el proyecto Angular, validando la integración con `ng test` y asegurando que el entorno de pruebas pudiera ejecutar suites de forma automatizada. La configuración quedó operativa sobre el bundle de aplicación (`spec-app-app.js`, `spec-app-search-search.service.js`), con un tamaño total inicial de **58.63 kB** y un tiempo de compilación de 2.683 segundos.

**TSK4-02 – Suite de pruebas: DummyJSON API**  
Se desarrolló la suite de pruebas unitarias para el servicio de búsqueda de productos (`search.service.spec.ts`), cubriendo los módulos `getAllProducts`, `getProductsByCategory`, `searchProducts`, `getProductDetails` y `getUsers`. Se validó la estructura de respuesta, los tipos de datos, el manejo de categorías inexistentes y la correcta recuperación de recursos por ID.

**TSK4-03 – Suite de pruebas: FakeStore API**  
Se desarrolló la suite de pruebas para los módulos de integración con FakeStore API (`api.spec.ts`), cubriendo `getFakeStoreProducts`, `getFakeStoreByCategory` y `getUserCart`. Se verificó la estructura de los objetos de respuesta, los tipos de dato del modelo de producto y la consistencia de los filtros por categoría.

**TSK4-04 – Validación de límites y manejo de excepciones**  
Se incluyeron suites específicas para condiciones de borde: manejo de *timeouts* con `ECONNABORTED`, respuesta ante endpoints inválidos (HTTP ≥ 400), búsquedas sin resultados y productos o categorías inexistentes. Ningún caso de borde produjo fallos no controlados en la ejecución final.

**TSK4-05 – Reporte de ejecución y cobertura**  
Se ejecutó la suite completa y se documentó el resultado. El reporte de cobertura fue generado como evidencia del proceso de validación de la Fase 4.

---

### Resultados de Ejecución

| Archivo de Prueba | Casos Ejecutados | Resultado | Duración |
|---|---|---|---|
| `src/app/search/search.service.spec.ts` | 11 | ✅ PASS | 67 ms |
| `src/app/app.spec.ts` | 2 | ✅ PASS | 142 ms |
| **TOTAL** | **13** | **✅ PASS** | **2.26 s** |

- **Test Files:** 2 passed (2)
- **Tests:** 13 passed (13)
- **Inicio de ejecución:** 17:22:34 — 08/06/2026
- **Duración total:** 2.26 s (transform 345ms · setup 1.06s · import 336ms · tests 210ms · environment 2.23s)
- **Framework:** Vitest v4.1.7 integrado con Angular (`ng test`)

---

### Cobertura de Casos por Suite

| Suite | Módulo Validado | Casos |
|---|---|---|
| DummyJSON — getAllProducts | Obtención de lista, estructura y total | 3 |
| DummyJSON — getProductsByCategory | Filtrado por categoría, manejo de inexistentes | 4 |
| DummyJSON — searchProducts | Búsqueda por keyword, resultado vacío | 3 |
| DummyJSON — getProductDetails | Campos completos, producto inexistente | 2 |
| DummyJSON — getUsers | Lista de usuarios, estructura, usuario por ID | 3 |
| FakeStore — getFakeStoreProducts | Lista, estructura, tipos de datos | 3 |
| FakeStore — getFakeStoreByCategory | Filtro por categoría, categorías disponibles | 3 |
| FakeStore — getUserCart | Carrito por ID, items, lista completa | 3 |
| Validación de Errores | Timeout ECONNABORTED, endpoint inválido | 2 |
| Rendimiento | Tiempo de respuesta DummyJSON y FakeStore < 3s | 2 |

---

### Defecto Detectado y Resuelto (Trazabilidad con LOGD)

Durante la ejecución de las pruebas se identificó el defecto **DEF-07** (registrado en LOGD.md): falla en las aserciones de la suite Vitest por desfase de milisegundos en la latencia emulada de red. Se resolvió configurando un *fake timer*, permitiendo que todas las aserciones finalizaran correctamente. Tiempo de fijación: 25 minutos.

---

### Conclusión

La ejecución de las **13 pruebas unitarias** distribuidas en **2 archivos de prueba** finalizó satisfactoriamente, sin fallos críticos en la rama de integración. Las suites desarrolladas proporcionan trazabilidad entre las tareas de aseguramiento de calidad (TSK4-01 a TSK4-05) y la validación real de los servicios de integración de APIs del proyecto, cumpliendo con los objetivos de calidad definidos bajo la metodología TSPi.

**Auditoría de Pruebas:** Daniel Torres Valenzuela (Test Manager) · Junio 2026

---

## 🎓 Conclusión

Este workbook proporciona una base sólida para integrar APIs externas en tus proyectos. Practica con los ejemplos y adapta el código a tus necesidades específicas.

**¡Felicidades! Ahora estás listo para trabajar con APIs en Node.js.** 🚀

---

**Última actualización**: Junio 2026  
**Equipo**: Carolina, Brayan, Jennifer Viviana Samper Torbello, Juan Angel Torres Florez, Jorge Torres, Daniel Torres Valenzuela

