import { Container, Row, Col, Card } from "react-bootstrap";

const About = () => {
  return (
    <div className="bg-light">
      {/* Hero Section */}
      <div className="bg-dark text-light text-center py-5">
        <h1 className="fw-bold">About ShopEasy</h1>
        <p className="lead">
          Your one-stop destination for quality shopping at affordable prices
        </p>
      </div>

      <Container className="my-5">
        {/* About Company */}
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <h2 className="fw-bold mb-3">Who We Are</h2>
            <p>
              ShopEasy is a modern e-commerce platform designed to make online
              shopping simple, fast, and secure. We bring a wide range of
              products including electronics, fashion, and accessories at the
              best prices.
            </p>
            <p>
              Our goal is to deliver high quality products with excellent
              customer service and fast shipping across the country.
            </p>
          </Col>

          <Col md={6}>
            <img
              src="https://images.unsplash.com/photo-1556742031-c6961e8560b0"
              className="img-fluid rounded shadow"
              alt="about shopping"
            />
          </Col>
        </Row>

        {/* Mission Vision */}
        <Row className="text-center mb-5">
          <Col md={6}>
            <Card className="shadow h-100 p-3">
              <Card.Body>
                <h3 className="text-primary">Our Mission</h3>
                <p>
                  To provide customers with the best online shopping experience
                  through quality products, competitive prices, and reliable
                  delivery.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="shadow h-100 p-3">
              <Card.Body>
                <h3 className="text-success">Our Vision</h3>
                <p>
                  To become the most trusted e-commerce platform by focusing on
                  innovation, customer satisfaction, and seamless digital
                  shopping.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Why Choose Us */}
        <h2 className="text-center fw-bold mb-4">Why Choose Us</h2>
        <Row className="text-center mb-5">
          <Col md={3}>
            <div className="p-3 shadow rounded bg-white">
              <h4>🚚</h4>
              <h6>Fast Delivery</h6>
              <p className="small">Quick and safe delivery to your doorstep</p>
            </div>
          </Col>

          <Col md={3}>
            <div className="p-3 shadow rounded bg-white">
              <h4>🔒</h4>
              <h6>Secure Payment</h6>
              <p className="small">100% secure payment methods</p>
            </div>
          </Col>

          <Col md={3}>
            <div className="p-3 shadow rounded bg-white">
              <h4>💰</h4>
              <h6>Best Prices</h6>
              <p className="small">Affordable products and daily deals</p>
            </div>
          </Col>

          <Col md={3}>
            <div className="p-3 shadow rounded bg-white">
              <h4>⭐</h4>
              <h6>Quality Products</h6>
              <p className="small">Verified and trusted brands</p>
            </div>
          </Col>
        </Row>

        {/* Video Section */}
        <h2 className="text-center fw-bold mb-4">Watch Our Story</h2>
        <Row className="justify-content-center mb-5">
          <Col md={8}>
            <div className="ratio ratio-16x9 shadow">
              <iframe
                src="https://www.youtube.com/embed/9No-FiEInLA"
                title="ShopEasy Intro Video"
                allowFullScreen
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
