import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import empty from "../assets/wishlistempty.jpeg";

const Whishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  const loadWishlist = () => {
    const data = JSON.parse(localStorage.getItem("wishlistitems")) || [];
    setWishlist(data);
  };

  useEffect(() => {
    loadWishlist();
  }, []);

  const removeItem = (id) => {
    const updated = wishlist.filter((item) => item.id !== id);
    localStorage.setItem("wishlistitems", JSON.stringify(updated));
    setWishlist(updated);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">❤️ My Wishlist</h2>

      {wishlist.length === 0 ? (
        <div className="text-center">
          <img src={empty} alt="empty" className="w-25 mb-3" />
          <h4>Your wishlist is empty</h4>
          <Link to="/" className="btn btn-primary mt-3">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="row">
          {wishlist.map((item) => (
            <div className="col-md-3 mb-4" key={item.id}>
              <div className="card h-100 shadow">
                <img
                  src={item.image}
                  className="card-img-top p-3"
                  style={{ height: "200px", objectFit: "contain" }}
                />

                <div className="card-body text-center">
                  <h6>{item.title}</h6>
                  <h5 className="text-success">${item.price}</h5>

                  <button
                    className="btn btn-danger w-100"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove ❌
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Whishlist;
