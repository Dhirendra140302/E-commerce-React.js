import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5 pt-5 pb-3">
      <Container>
        {/* Top Section */}
        <Row className="mb-4">
          {/* About */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="fw-bold">ShopEasy</h5>
            <p className="small">
              ShopEasy is your trusted online shopping destination. We provide
              best quality products at affordable prices with fast delivery and
              secure payment.
            </p>
          </Col>

          {/* Customer Service */}
          <Col md={3} sm={6} className="mb-4">
            <h6 className="fw-bold">Customer Service</h6>
            <ul className="list-unstyled small">
              <li>Help Center</li>
              <li>Track Order</li>
              <li>Return & Refund</li>
              <li>Shipping Info</li>
              <li>FAQ</li>
            </ul>
          </Col>

          {/* Policies */}
          <Col md={3} sm={6} className="mb-4">
            <h6 className="fw-bold">Policies</h6>
            <ul className="list-unstyled small">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Cancellation Policy</li>
              <li>Payment Policy</li>
            </ul>
          </Col>

          {/* Contact */}
          <Col md={3} sm={6} className="mb-4">
            <h6 className="fw-bold">Contact Us</h6>
            <p className="small mb-1">📍 Hyderabad, India</p>
            <p className="small mb-1">📞 +91 98765 43210</p>
            <p className="small">✉ support@shopeasy.com</p>

            {/* Social Icons */}
            <div className="fs-5 mt-2">
              <i className="bi bi-facebook me-3"></i>
              <i className="bi bi-instagram me-3"></i>
              <i className="bi bi-twitter me-3"></i>
              <i className="bi bi-youtube"></i>
            </div>
          </Col>
        </Row>

        <hr className="border-light" />

        {/* Bottom Section */}
        <Row>
          <Col className="text-center small">
            © {new Date().getFullYear()} ShopEasy Pvt Ltd. All Rights Reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
