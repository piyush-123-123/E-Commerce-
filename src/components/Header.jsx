import {Navbar , Container ,Nav,Button} from "react-bootstrap";

const Header=()=>{

    return (
        <Navbar bg="dark" variant="dark" text="White">
            <Container>
                <Nav  className="mx-auto">
                <Nav.Link className="text-white fw-bold">Home</Nav.Link>
                 <Nav.Link className="text-white fw-bold">Store</Nav.Link>
                  <Nav.Link className="text-white fw-bold">About</Nav.Link>
                </Nav>
                <Button variant="outline-info">Cart</Button>
            </Container>

            </Navbar>


    )
}

export default Header;