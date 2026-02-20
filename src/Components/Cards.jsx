import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import ShimmerEffectCards from "./ShimmereffectCards";
import StarRating from "./StarRating";

const Cards = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const navigate = useNavigate();

  // Fetch products
  const fetchProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
    setFilteredProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Wishlist Sync
  useEffect(() => {
    const updateWishlist = () => {
      const saved = JSON.parse(localStorage.getItem("wishlistitems")) || [];
      setWishlist(saved.map((item) => item.id));
    };

    updateWishlist();
    window.addEventListener("wishlistUpdated", updateWishlist);

    return () => window.removeEventListener("wishlistUpdated", updateWishlist);
  }, []);

  // Search
  const handleSearch = () => {
    const result = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase()),
    );
    setFilteredProducts(result);
  };

  // Category filter
  const filteredCategory = [...new Set(products.map((p) => p.category))];

  const handleSelection = (e) => {
    const value = e.target.value;
    if (value === "all") setFilteredProducts(products);
    else setFilteredProducts(products.filter((p) => p.category === value));
  };

  // Wishlist toggle
  const toggleWishlist = (product) => {
    let existed = JSON.parse(localStorage.getItem("wishlistitems")) || [];
    const already = existed.find((item) => item.id === product.id);

    if (already) existed = existed.filter((item) => item.id !== product.id);
    else existed.push(product);

    localStorage.setItem("wishlistitems", JSON.stringify(existed));
    window.dispatchEvent(new Event("wishlistUpdated"));
  };

  return (
    <>
      {products.length === 0 ? (
        <ShimmerEffectCards />
      ) : (
        <div className="bg-secondary pt-4 pe-5">
          <Form className="d-flex gap-2 justify-content-end">
            <select className="form-select w-auto" onChange={handleSelection}>
              <option value="all">All Categories</option>
              {filteredCategory.map((cat, i) => (
                <option key={i}>{cat}</option>
              ))}
            </select>

            <input
              type="text"
              className="form-control w-25"
              placeholder="search products..."
              onChange={(e) => setSearch(e.target.value)}
            />

            <Button variant="outline-info" onClick={handleSearch}>
              Search
            </Button>
          </Form>
        </div>
      )}

      <div className="d-flex flex-wrap gap-4 justify-content-center p-4">
        {filteredProducts.map((product) => (
          <Card key={product.id} style={{ width: "20rem" }}>
            <div className="d-flex justify-content-end p-2">
              <i
                className={`bi ${
                  wishlist.includes(product.id)
                    ? "bi-heart-fill text-danger"
                    : "bi-heart"
                } fs-4`}
                role="button"
                onClick={() => toggleWishlist(product)}
              ></i>
            </div>

            <Card.Img
              variant="top"
              src={product.image}
              className="d-block mx-auto mt-3"
              style={{ height: "200px", objectFit: "contain" }}
            />

            <Card.Body>
              <Card.Title className="text-truncate">{product.title}</Card.Title>

              <StarRating rate={product.rating?.rate || 0} />

              <Card.Text>{product.description.slice(0, 60)}...</Card.Text>

              <h5 className="text-success">${product.price}</h5>

              <Button
                variant="success"
                onClick={() => navigate("/details", { state: product })}
              >
                More Details
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Cards;
