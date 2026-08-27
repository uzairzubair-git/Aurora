import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

export interface Order {
  id: number;
  customerName: string;
  email: string;
  items: any[];
  total: number;
  status: string;
  createdAt: Date;
}

@Injectable()
export class OrdersService {
  private orders: Order[] = [];

  createOrder(orderData: {
    customerName: string;
    email: string;
    items: any[];
    total: number;
  }) {
    const order: Order = {
      id:
        this.orders.length > 0
          ? Math.max(...this.orders.map((o) => o.id)) + 1
          : 1,
      customerName: orderData.customerName,
      email: orderData.email,
      items: orderData.items || [],
      total: orderData.total || 0,
      status: 'confirmed',
      createdAt: new Date(),
    };

    this.orders.push(order);

    return order;
  }

  findAll() {
    return this.orders;
  }

  findOne(id: number) {
    const order = this.orders.find(
      (order) => order.id === id,
    );

    if (!order) {
      throw new NotFoundException('Order not found');
    }

    return order;
  }

  updateStatus(id: number, status: string) {
    const order = this.findOne(id);

    order.status = status;

    return order;
  }

  remove(id: number) {
    const index = this.orders.findIndex(
      (order) => order.id === id,
    );

    if (index === -1) {
      throw new NotFoundException('Order not found');
    }

    const deletedOrder = this.orders.splice(index, 1)[0];

    return {
      message: 'Order deleted successfully',
      order: deletedOrder,
    };
  }
}