import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="h-100">
      <Container fluid>
        <Navbar.Brand className="fs-6 fw-semibold">
            🍔 | Bem vindo, José Maria
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link>
            Sair
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
