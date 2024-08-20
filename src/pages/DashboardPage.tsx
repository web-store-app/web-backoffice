
import React from 'react';

const DashboardPage: React.FC = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <h3>Resumo de Vendas</h3>
        {/* Aqui você pode adicionar gráficos ou listas com as vendas recentes */}
      </div>
      <div>
        <h3>Produtos Populares</h3>
        {/* Exiba uma lista ou gráfico de produtos mais vendidos */}
      </div>
      <div>
        <h3>Status do Estoque</h3>
        {/* Mostre informações sobre o estoque atual */}
      </div>
    </div>
  );
};

export default DashboardPage;
