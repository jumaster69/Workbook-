import { describe, it, expect, beforeEach } from 'vitest';
import axios from 'axios';

describe('DummyJSON API - Specs', () => {
  const API_BASE = 'https://dummyjson.com';

  describe('getAllProducts', () => {
    it('debe obtener todos los productos', async () => {
      const response = await axios.get(`${API_BASE}/products`);
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('products');
      expect(Array.isArray(response.data.products)).toBe(true);
      expect(response.data.products.length).toBeGreaterThan(0);
    });

    it('debe retornar productos con estructura válida', async () => {
      const response = await axios.get(`${API_BASE}/products`);
      const product = response.data.products[0];
      
      expect(product).toHaveProperty('id');
      expect(product).toHaveProperty('title');
      expect(product).toHaveProperty('price');
      expect(product).toHaveProperty('category');
      expect(typeof product.title).toBe('string');
      expect(typeof product.price).toBe('number');
    });

    it('debe retornar el total de productos', async () => {
      const response = await axios.get(`${API_BASE}/products`);
      expect(response.data).toHaveProperty('total');
      expect(typeof response.data.total).toBe('number');
      expect(response.data.total).toBeGreaterThan(0);
    });
  });

  describe('getProductsByCategory', () => {
    it('debe obtener productos por categoría válida', async () => {
      const category = 'smartphones';
      const response = await axios.get(`${API_BASE}/products/category/${category}`);
      
      expect(response.status).toBe(200);
      expect(response.data.products.length).toBeGreaterThan(0);
    });

    it('debe filtrar productos por categoría correctamente', async () => {
      const category = 'smartphones';
      const response = await axios.get(`${API_BASE}/products/category/${category}`);
      
      response.data.products.forEach(product => {
        expect(product.category).toBe(category);
      });
    });

    it('debe manejar categorías inexistentes', async () => {
      try {
        await axios.get(`${API_BASE}/products/category/nonexistent-category`);
      } catch (error) {
        expect(error.response.status).toBe(400);
      }
    });

    it('debe retornar datos de categorías válidas', async () => {
      const response = await axios.get(`${API_BASE}/products/categories`);
      expect(Array.isArray(response.data)).toBe(true);
      expect(response.data.length).toBeGreaterThan(0);
    });
  });

  describe('searchProducts', () => {
    it('debe buscar productos por palabra clave', async () => {
      const keyword = 'phone';
      const response = await axios.get(`${API_BASE}/products/search?q=${keyword}`);
      
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('products');
      expect(response.data.products.length).toBeGreaterThan(0);
    });

    it('debe retornar productos que coincidan con la búsqueda', async () => {
      const keyword = 'laptop';
      const response = await axios.get(`${API_BASE}/products/search?q=${keyword}`);
      
      response.data.products.forEach(product => {
        const titleLower = product.title.toLowerCase();
        expect(titleLower).toContain(keyword.toLowerCase());
      });
    });

    it('debe retornar búsqueda vacía para palabras sin resultados', async () => {
      const keyword = 'xyznonexistent123';
      const response = await axios.get(`${API_BASE}/products/search?q=${keyword}`);
      
      expect(response.data.products.length).toBe(0);
    });
  });

  describe('getProductDetails', () => {
    it('debe obtener detalles de un producto específico', async () => {
      const productId = 1;
      const response = await axios.get(`${API_BASE}/products/${productId}`);
      
      expect(response.status).toBe(200);
      expect(response.data.id).toBe(productId);
    });

    it('debe retornar todos los campos del producto', async () => {
      const response = await axios.get(`${API_BASE}/products/1`);
      const product = response.data;
      
      expect(product).toHaveProperty('id');
      expect(product).toHaveProperty('title');
      expect(product).toHaveProperty('description');
      expect(product).toHaveProperty('price');
      expect(product).toHaveProperty('discountPercentage');
      expect(product).toHaveProperty('rating');
      expect(product).toHaveProperty('stock');
      expect(product).toHaveProperty('brand');
      expect(product).toHaveProperty('category');
    });

    it('debe manejar productos inexistentes', async () => {
      try {
        await axios.get(`${API_BASE}/products/99999`);
      } catch (error) {
        expect(error.response.status).toBe(404);
      }
    });
  });

  describe('getUsers', () => {
    it('debe obtener lista de usuarios', async () => {
      const response = await axios.get(`${API_BASE}/users`);
      
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('users');
      expect(Array.isArray(response.data.users)).toBe(true);
    });

    it('debe retornar usuarios con estructura válida', async () => {
      const response = await axios.get(`${API_BASE}/users`);
      const user = response.data.users[0];
      
      expect(user).toHaveProperty('id');
      expect(user).toHaveProperty('firstName');
      expect(user).toHaveProperty('lastName');
      expect(user).toHaveProperty('email');
    });

    it('debe obtener un usuario específico', async () => {
      const userId = 1;
      const response = await axios.get(`${API_BASE}/users/${userId}`);
      
      expect(response.status).toBe(200);
      expect(response.data.id).toBe(userId);
    });
  });
});

describe('FakeStore API - Specs', () => {
  const API_BASE = 'https://fakestoreapi.com';

  describe('getFakeStoreProducts', () => {
    it('debe obtener todos los productos de FakeStore', async () => {
      const response = await axios.get(`${API_BASE}/products`);
      
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
      expect(response.data.length).toBeGreaterThan(0);
    });

    it('debe retornar productos con estructura FakeStore', async () => {
      const response = await axios.get(`${API_BASE}/products`);
      const product = response.data[0];
      
      expect(product).toHaveProperty('id');
      expect(product).toHaveProperty('title');
      expect(product).toHaveProperty('price');
      expect(product).toHaveProperty('category');
      expect(product).toHaveProperty('rating');
      expect(product.rating).toHaveProperty('rate');
      expect(product.rating).toHaveProperty('count');
    });

    it('debe validar tipos de datos de productos', async () => {
      const response = await axios.get(`${API_BASE}/products`);
      const product = response.data[0];
      
      expect(typeof product.id).toBe('number');
      expect(typeof product.title).toBe('string');
      expect(typeof product.price).toBe('number');
      expect(typeof product.rating.rate).toBe('number');
      expect(typeof product.rating.count).toBe('number');
    });
  });

  describe('getFakeStoreByCategory', () => {
    it('debe obtener productos por categoría', async () => {
      const category = 'electronics';
      const response = await axios.get(`${API_BASE}/products/category/${category}`);
      
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
      expect(response.data.length).toBeGreaterThan(0);
    });

    it('debe filtrar correctamente por categoría', async () => {
      const category = 'electronics';
      const response = await axios.get(`${API_BASE}/products/category/${category}`);
      
      response.data.forEach(product => {
        expect(product.category).toBe(category);
      });
    });

    it('debe retornar todas las categorías disponibles', async () => {
      const response = await axios.get(`${API_BASE}/categories`);
      
      expect(Array.isArray(response.data)).toBe(true);
      expect(response.data.length).toBeGreaterThan(0);
    });
  });

  describe('getUserCart', () => {
    it('debe obtener carrito de usuario', async () => {
      const userId = 1;
      const response = await axios.get(`${API_BASE}/carts/${userId}`);
      
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id');
      expect(response.data).toHaveProperty('userId');
      expect(response.data).toHaveProperty('products');
    });

    it('debe retornar productos en el carrito', async () => {
      const response = await axios.get(`${API_BASE}/carts/1`);
      
      expect(Array.isArray(response.data.products)).toBe(true);
      if (response.data.products.length > 0) {
        const cartItem = response.data.products[0];
        expect(cartItem).toHaveProperty('productId');
        expect(cartItem).toHaveProperty('quantity');
      }
    });

    it('debe obtener todos los carritos', async () => {
      const response = await axios.get(`${API_BASE}/carts`);
      
      expect(Array.isArray(response.data)).toBe(true);
      expect(response.data.length).toBeGreaterThan(0);
    });
  });
});

describe('Validación de Errores', () => {
  it('debe manejar timeouts en solicitudes', async () => {
    try {
      await axios.get('https://httpstat.us/200?sleep=10000', {
        timeout: 1000
      });
    } catch (error) {
      expect(error.code).toBe('ECONNABORTED');
    }
  });

  it('debe retornar error para endpoints inválidos', async () => {
    try {
      await axios.get('https://dummyjson.com/invalid-endpoint');
    } catch (error) {
      expect(error.response.status).toBeGreaterThanOrEqual(400);
    }
  });
});

describe('Rendimiento de APIs', () => {
  it('DummyJSON debe responder en menos de 3 segundos', async () => {
    const startTime = Date.now();
    await axios.get('https://dummyjson.com/products');
    const endTime = Date.now();
    
    expect(endTime - startTime).toBeLessThan(3000);
  });

  it('FakeStore debe responder en menos de 3 segundos', async () => {
    const startTime = Date.now();
    await axios.get('https://fakestoreapi.com/products');
    const endTime = Date.now();
    
    expect(endTime - startTime).toBeLessThan(3000);
  });
});
