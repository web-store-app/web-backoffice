import axios from 'axios';
import { Customer, Order, OrderProduct, Product, Section, Store } from '../types';

// Configuração padrão do Axios
const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
    // Adicione outros cabeçalhos padrão se necessário
  },
});

// Funções CRUD para Customer
export const getCustomers = async () => {
  return await api.get<Customer[]>('/customers');
};

export const createCustomer = async (customer: Customer) => {
  return await api.post('/customers', customer);
};

export const updateCustomer = async (id: number, customer: Partial<Customer>) => {
  return await api.put(`/customers/${id}`, customer);
};

export const deleteCustomer = async (id: number) => {
  return await api.delete(`/customers/${id}`);
};

// Funções CRUD para Order
export const getOrders = async () => {
  return await api.get<Order[]>('/orders');
};

export const createOrder = async (order: Order) => {
  return await api.post('/orders', order);
};

export const updateOrder = async (id: number, order: Partial<Order>) => {
  return await api.put(`/orders/${id}`, order);
};

export const deleteOrder = async (id: number) => {
  return await api.delete(`/orders/${id}`);
};

// Funções CRUD para OrderProduct
export const getOrderProducts = async () => {
  return await api.get<OrderProduct[]>('/order-products');
};

export const createOrderProduct = async (orderProduct: OrderProduct) => {
  return await api.post('/order-products', orderProduct);
};

export const updateOrderProduct = async (id: number, orderProduct: Partial<OrderProduct>) => {
  return await api.put(`/order-products/${id}`, orderProduct);
};

export const deleteOrderProduct = async (id: number) => {
  return await api.delete(`/order-products/${id}`);
};

// Funções CRUD para Product
export const getProducts = async () => {
  return await api.get<Product[]>('/products');
};

export const createProduct = async (product: Product) => {
  return await api.post('/products', product);
};

export const updateProduct = async (id: number, product: Partial<Product>) => {
  return await api.put(`/products/${id}`, product);
};

export const deleteProduct = async (id: number) => {
  return await api.delete(`/products/${id}`);
};

// Funções CRUD para Section
export const getSections = async () => {
  return await api.get<Section[]>('/sections');
};

export const createSection = async (section: Section) => {
  return await api.post('/sections', section);
};

export const updateSection = async (id: number, section: Partial<Section>) => {
  return await api.put(`/sections/${id}`, section);
};

export const deleteSection = async (id: number) => {
  return await api.delete(`/sections/${id}`);
};

// Funções CRUD para Store
export const getStore = async () => {
  return await api.get<Store>('/store');
};

export const createStore = async (store: Store) => {
  return await api.post('/store', store);
};

export const updateStore = async (id: number, store: Partial<Store>) => {
  return await api.put(`/store/${id}`, store);
};

export const deleteStore = async (id: number) => {
  return await api.delete(`/store/${id}`);
};
