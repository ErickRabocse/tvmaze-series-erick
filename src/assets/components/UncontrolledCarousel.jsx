import "./uncontrolledCarousel.css";

import Carousel from "react-bootstrap/Carousel";

function UncontrolledExample() {
  return (
    <Carousel className="carouselSection">
      <Carousel.Item className="carouselItem">
        <img
          // className="d-block w-100"
          className="d-block"
          src="../../public/sofa.jpeg"
          alt="First slide"
          style={{ width: 800, marginLeft: "auto", marginRight: "auto" }}
        />
        <Carousel.Caption className="header">
          <h3>You&apos;re in the right place!</h3>
          <p>
            Relive memories with your favorite childhood series or discover new
            titles. All in one place.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselItem">
        <img
          className="d-block"
          src="../../public/bored.jpeg"
          alt="Second slide"
          style={{ width: 800, marginLeft: "auto", marginRight: "auto" }}
        />

        <Carousel.Caption className="header">
          <h3>Feeling bored?</h3>
          <p>
            Don&apos;t know what to watch? Browse through our site and find the
            series that is right for you.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselItem">
        <img
          className="d-block"
          src="../../public/excited.jpeg"
          alt="Third slide"
          style={{ width: 800, marginLeft: "auto", marginRight: "auto" }}
        />

        <Carousel.Caption className="header">
          <h3>You&apos;ve come to the right place.</h3>
          <p>
            We have over a thousand series titles, be assured that you&apos;ll
            come across something exciting to watch.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
