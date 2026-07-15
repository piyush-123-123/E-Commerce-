import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink ,useLocation} from "react-router-dom";

const Header = ({ onOpenCart }) => {
  const location=useLocation();
  return (
   <Navbar bg="dark" variant="dark" fixed="top">
  <Container>

    <div style={{ width: "100px" }}></div>


    <Nav className="mx-auto">
      <Nav.Link as={NavLink} to="/" end>
        Home
      </Nav.Link>

      <Nav.Link as={NavLink} to="/store">
        Store
      </Nav.Link>

      <Nav.Link as={NavLink} to="/about">
        About
      </Nav.Link>
    </Nav>

  
    <div style={{ width: "100px", textAlign: "right" }}>
      {location.pathname === "/store" && (
        <Button variant="outline-light" onClick={onOpenCart}>
          Cart
        </Button>
      )}
    </div>

  </Container>
</Navbar>
  );
};

export default Header;