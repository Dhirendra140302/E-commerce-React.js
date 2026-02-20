import { useEffect, useState } from "react";
import {
  getCart,
  removeFromCart,
  clearCart,
  increaseQty,
  decreaseQty,
} from "../util/cart";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const load = () => setCart(getCart());
    load();

    window.addEventListener("cartUpdated", load);
    return () => window.removeEventListener("cartUpdated", load);
  }, []);

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="container mt-4">
      <h2>🛒 My Cart</h2>

      {cart.length === 0 ? (
        <h4>Your cart is empty</h4>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="card mb-3 p-3 d-flex flex-row align-items-center"
            >
              <img src={item.image} style={{ height: "80px" }} />

              <div className="ms-4 flex-grow-1">
                <h5>{item.title}</h5>

                <div className="d-flex align-items-center gap-2">
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => decreaseQty(item.id)}
                  >
                    -
                  </button>

                  <span className="fw-bold">{item.qty}</span>

                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => increaseQty(item.id)}
                  >
                    +
                  </button>
                </div>

                <h6 className="mt-2">₹ {(item.price * 83).toFixed(2)}</h6>
              </div>

              <button
                className="btn btn-danger"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          <hr />
          <h3>Total: ₹ {(total * 83).toFixed(2)}</h3>

          <button className="btn btn-success mt-3" onClick={clearCart}>
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
