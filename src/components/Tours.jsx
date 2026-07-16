import {Button } from "react-bootstrap";
import "./Tours.css";
const tours = [
  {
    date: "JUL 16",
    city: "DETROIT, MI",
    venue: "DTE ENERGY MUSIC THEATRE",
  },
  {
    date: "JUL 19",
    city: "TORONTO, ON",
    venue: "BUDWEISER STAGE",
  },
  {
    date: "JUL 22",
    city: "BRISTOW, VA",
    venue: "JIGGY LUBE LIVE",
  },
  {
    date: "JUL 29",
    city: "PHOENIX, AZ",
    venue: "AK-CHIN PAVILION",
  },
  {
    date: "AUG 2",
    city: "LAS VEGAS, NV",
    venue: "T-MOBILE ARENA",
  },
  {
    date: "AUG 7",
    city: "CONCORD, CA",
    venue: "CONCORD PAVILION",
  },
];

const Tours = () => {
  return (
    <div className="tour">
      <h2 className="text-center fw-bold mb-5">TOURS</h2>
   
      {tours.map((tour, index) => (
     <div key={index} className="tourList">
    <span>{tour.date}</span>
    <span>{tour.city}</span>
    <span>{tour.venue}</span>
    <Button variant="outline-info">Buy Tickets</Button>
  </div>
))}
    </div>
  );
};

export default Tours;