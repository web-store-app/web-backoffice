import React, { useState, useEffect } from 'react';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../services/api';
import { Product } from '../types';
import PageLayout from '../layouts/PageLayout';

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState<Partial<Product>>({ name: '', description: '', price: 0, sectionId: 0 });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await getProducts();
    setProducts(response.data);
  };

  const handleCreate = async () => {
    await createProduct(newProduct as Product);
    fetchProducts();
  };

  const handleUpdate = async (id: number) => {
    await updateProduct(id, newProduct as Product);
    fetchProducts();
  };

  const handleDelete = async (id: number) => {
    await deleteProduct(id);
    fetchProducts();
  };

  return (
    <PageLayout
      title='Produtos'
    />
  );
};

export default ProductsPage;
