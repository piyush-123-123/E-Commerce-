import {Navbar , Container ,Nav} from "react-bootstrap";

const Header=()=>{

    return (
        <Navbar>
            <Container>
                <Nav>
                <Nav.Link>Home</Nav.Link>
                 <Nav.Link>Store</Nav.Link>
                  <Nav.Link>About</Nav.Link>
                </Nav>
            </Container>
            </Navbar>


    )
}

export default Header;