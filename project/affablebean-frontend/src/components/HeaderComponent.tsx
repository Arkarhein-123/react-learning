import "./HeaderComponent.css";
import { MdShoppingCart } from "react-icons/md";
import useCart from "../hook/useCart";
import { Link } from "react-router";

export default function HeaderComponent() {
  const { items } = useCart();

  return (
    <>
      <div className="container">
        <img id="logo" src="/images/logo.png" alt="logo" />
        <img id="logoText" src="/images/logoText.png" alt="logoText" />
        <img id="stalk" src="/images/stalk.png" alt="stalk" />
      </div>

      <div className="container mt-3">
        <div className="row">
          <div className="col-12 d-flex justify-content-end align-items-center gap-2 ">
            {/* Shopping Cart Icon */}
            <div className="d-flex align-items-center cursor-pointer">
              <Link to="/cart" className="text-decoration-none">
                <MdShoppingCart
                  size={32}
                  className="text-primary bg-light p-1 rounded mx-1"
                />
                <span className="text-dark fw-bolder fs-3 ms-1 align-middle">
                  {items.length}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
