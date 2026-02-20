import { useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { addToCart } from "../util/cart";

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state;

  if (!product) {
    return (
      <div className="text-center mt-5">
        <h2>Product not found</h2>
        <Button onClick={() => navigate("/")}>Go Home</Button>
      </div>
    );
  }

  const handleAddCart = () => {
    addToCart(product);
    alert("Product added to cart!");
  };

  return (
    <div className="product-details-container">
      <div className="product-details-card">
        <div className="image-wrapper">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
        </div>

        <div className="product-info">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-desc">{product.description}</p>

          <h3 className="product-price">₹ {(product.price * 83).toFixed(2)}</h3>

          <div className="product-actions">
            <Button variant="warning" onClick={handleAddCart}>
              Add to Cart
            </Button>

            <Button variant="success">Buy Now</Button>

            <Button variant="secondary" onClick={() => navigate("/")}>
              Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
