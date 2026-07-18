import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../components/store/AuthContext"

const Header = ({ onOpenCart }) => {
  const location = useLocation();
  const ctx=useContext(AuthContext);

  return (
    <Navbar bg="dark" variant="dark" fixed="top" >
      <Container>
        <div style={{ width: "100px" }}></div>

        <Nav className="mx-auto">
          <Nav.Link className="fw-semibold text-uppercase" as={NavLink} exact to="/" activeClassName="active">
            Home
          </Nav.Link>

          <Nav.Link className="fw-semibold text-uppercase" as={NavLink} to="/store" activeClassName="active">
            Store
          </Nav.Link>

          <Nav.Link className="fw-semibold text-uppercase" as={NavLink} to="/about" activeClassName="active">
            About
          </Nav.Link>

          <Nav.Link className="fw-semibold text-uppercase" as={NavLink} to="/contact" activeClassName="active">
            Contact Us
          </Nav.Link>
        {!ctx.isLoggedIn && (
          <Nav.Link className="fw-semibold text-uppercase" as={NavLink} to="/login">
           Login
         </Nav.Link>
        )}
{ctx.isLoggedIn && (
  <button
    className="btn btn-outline-light"
    onClick={ctx.logout}
  >
    Logout
  </button>
)}
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