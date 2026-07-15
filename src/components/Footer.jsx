import { Container } from "react-bootstrap";
import {useLocation} from "react-router-dom";

const Footer = () => {
    const location =useLocation();

  return (
    <footer className="bg-info text-white py-4 mt-5">
      <Container className="d-flex justify-content-between align-items-center">
        <h2 className="ml-8">The Generics</h2>
       {location.pathname !=="/" &&
        <div className="d-flex bg-lightgray gap-5">
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
              alt="YouTube"
              width="35"
            />
          </a>

          <a
            href="https://open.spotify.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174872.png"
              alt="Spotify"
              width="35"
            />
          </a>

          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
              width="35"
            />
          </a>
        </div>
}
      </Container>
    </footer>
  );
};

export default Footer;