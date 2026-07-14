import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = ({ onOpenCart }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="mx-auto">
          <Nav.Link as={NavLink} to="/" end className="text-white fw-bold">
            Home
          </Nav.Link>

          <Nav.Link as={NavLink} to="/store" className="text-white fw-bold">
            Store
          </Nav.Link>

          <Nav.Link as={NavLink} to="/about" className="text-white fw-bold">
            About
          </Nav.Link>
        </Nav>

        <Button variant="outline-info" onClick={onOpenCart}>
          Cart
        </Button>
      </Container>
    </Navbar>
  );
};

export default Header;