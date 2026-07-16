import { Container, Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isContactUs=location.pathname==="/contact";

  return (
    <>
  {!isContactUs &&
  <div className="bg-secondary text-white text-center py-5 ">
   <Container className="hero d-flex flex-column align-items-center">
  <h1 className="display-1 fw-bold">The Generics</h1>

  {isHome && (
    <>
      <Button
        variant="outline-info"
        className="text-white mt-3"
      >
        Get our Latest Album
      </Button>

      <Button
        variant="outline-info"
        className="rounded-circle mt-4"
        style={{ width: "70px", height: "70px" }}
      >
        ▶
      </Button>
    </>
  )}

</Container>
    </div>
}
</>
  );
};

export default Hero;