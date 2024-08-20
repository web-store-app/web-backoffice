import React, { useState, useEffect } from 'react';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../services/api';
import { Product } from '../types';

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
    <div>
      <h2>Gerenciar Produtos</h2>
      <input
        type="text"
        placeholder="Nome"
        value={newProduct.name || ''}
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Descrição"
        value={newProduct.description || ''}
        onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
      />
      <input
        type="number"
        placeholder="Preço"
        value={newProduct.price || 0}
        onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
      />
      <input
        type="text"
        placeholder="Seção"
        value={newProduct.sectionId || ''}
        onChange={(e) => setNewProduct({ ...newProduct, sectionId: Number(e.target.value) })}
      />
      <button onClick={handleCreate}>Adicionar Produto</button>

      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.description} - R$ {product.price.toFixed(2)}
            <button onClick={() => handleUpdate(product.id)}>Atualizar</button>
            <button onClick={() => handleDelete(product.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
