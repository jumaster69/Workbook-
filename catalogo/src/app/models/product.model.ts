/**
 * Modelo de datos de un producto del catalogo.
 * id, title, description, price, discountPercentage, rating, stock,
 * brand, category, thumbnail e images.
 */
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
