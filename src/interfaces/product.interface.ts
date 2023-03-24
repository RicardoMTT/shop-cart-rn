export interface Product {
  id: number;
  nombre: string;
  title:string;
  price:number;
  descripcion: string;
  precio: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  thumbnail: string;
  images: string[];
  category: Category;
}

interface Category {
  nombre: string;
  descripcion: string;
}
