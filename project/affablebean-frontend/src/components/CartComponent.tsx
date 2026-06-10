import { Link } from "react-router";
import type { CartItem } from "../data/Type";
import useCart from "../hook/useCart";

export default function CartComponent() {
  const {
    items,
    totalAmount,
    clearCart,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useCart();

  return (
    <div className="container my-3">
      <div className="d-flex justify-content-between align-items-center my-3 mx-2">
        <button onClick={clearCart} className="btn btn-primary px-3 py-2">
          Clear Cart
        </button>
        <Link to="/" className="btn btn-primary">
          Continue Shopping
        </Link>
        <button className="btn btn-primary px-3 py-2">Checkout</button>
      </div>

      <table className="table table-striped table-hover table-bordered rounded">
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody className="align-middle text-center">
          {items &&
            items.map((item: CartItem) => (
              <tr key={item.id}>
                <td>
                  <img
                    src={`/images/products/${item.name}.png`}
                    alt={item.name}
                    width="70"
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <span
                    onClick={() => decreaseQty(item.id)}
                    className="bg-primary px-3 py-1 rounded mx-2 text-white fs-4"
                    style={{ cursor: "pointer" }}
                  >
                    -
                  </span>
                  {item.quantity}
                  <span
                    onClick={() => increaseQty(item.id)}
                    className="bg-primary px-3 py-1 rounded mx-2 text-white fs-4"
                    style={{ cursor: "pointer" }}
                  >
                    +
                  </span>
                </td>
                <td>{(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <h3 className="text-end">Grand Total: ${totalAmount.toFixed(2)}</h3>
    </div>
  );
}
