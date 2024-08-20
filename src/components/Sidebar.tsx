import { Nav } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column bg-dark h-100">
      <Nav className="flex-column">
        <Nav.Link href="/dashboard" className="text-white">Dashboard</Nav.Link>
        <Nav.Link href="/pedidos" className="text-white">Pedidos</Nav.Link>
        <Nav.Link href="/produtos" className="text-white">Produtos</Nav.Link>
        <Nav.Link href="/sessoes" className="text-white">Sessões</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
