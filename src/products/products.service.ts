import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  badge?: string;
  rating?: number;
  image: string;
}

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Classic T-Shirt',
      category: 'T-Shirts',
      price: 2500,
      oldPrice: 3000,
      badge: '-17%',
      rating: 4.5,
      image:
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 2,
      name: 'Classic Jeans',
      category: 'Jeans',
      price: 4500,
      oldPrice: 5500,
      badge: '-18%',
      rating: 4.7,
      image:
        'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 3,
      name: 'Casual Shirt',
      category: 'Shirts',
      price: 3500,
      oldPrice: 4000,
      badge: '-12%',
      rating: 4.4,
      image:
        'https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?q=80&w=800&auto=format&fit=crop',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find(
      (product) => product.id === id,
    );

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return product;
  }

  create(productData: Omit<Product, 'id'>) {
    const product: Product = {
      id:
        this.products.length > 0
          ? Math.max(...this.products.map((p) => p.id)) + 1
          : 1,
      ...productData,
    };

    this.products.push(product);

    return product;
  }

  update(id: number, productData: Partial<Omit<Product, 'id'>>) {
    const product = this.findOne(id);

    Object.assign(product, productData);

    return product;
  }

  remove(id: number) {
    const index = this.products.findIndex(
      (product) => product.id === id,
    );

    if (index === -1) {
      throw new NotFoundException('Product not found');
    }

    const deletedProduct = this.products.splice(index, 1)[0];

    return {
      message: 'Product deleted successfully',
      product: deletedProduct,
    };
  }
}