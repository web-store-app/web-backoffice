export interface Customer {
    id: number;
    name: string;
    email: string;
    phone?: string; // Opcional
    address?: string; // Opcional
    // Outros campos relacionados ao Customer
  }
  
  export interface Order {
    id: number;
    customerId: number;
    total: number;
    date: string;
    status: 'pending' | 'completed' | 'cancelled';
    // Outros campos relacionados ao Order
  }
  
  export interface OrderProduct {
    id: number;
    orderId: number;
    productId: number;
    quantity: number;
    price: number;
    // Outros campos relacionados ao OrderProduct
  }
  
  export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    sectionId: number;
    // Outros campos relacionados ao Product
  }
  
  export interface Section {
    id: number;
    name: string;
    description?: string; // Opcional
    // Outros campos relacionados à Section
  }
  
  export interface Store {
    id: number;
    name: string;
    location: string;
    // Outros campos relacionados à Store
  }
  