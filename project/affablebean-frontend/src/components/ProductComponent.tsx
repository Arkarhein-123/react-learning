import { Link, useParams } from "react-router";
import type { Product } from "../data/Type";
import { useProduct } from "../hook/useProduct";
import { useEffect } from "react";
import { LuPackageSearch } from "react-icons/lu"; // A more professional IMS-style icon
import useCart from "../hook/useCart";

export default function ProductComponent() {
  const { category } = useParams();
  const { state, fetchProduct } = useProduct();
  const { products, error, loading } = state;
  const { addToCart } = useCart();

  useEffect(() => {
    if (!category) return;
    fetchProduct(category);
  }, [category]);

  return (
    <>
      <style>
        {`
          @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .icon-loader {
            animation: spin-slow 3s linear infinite;
            filter: drop-shadow(0px 0px 8px rgba(13, 110, 253, 0.5));
          }
        `}
      </style>

      <div className="container mt-5 mb-3">
        <div className="row">
          <div className="col-md-4">
            <div className="d-flex flex-column">
              <Link to="/" className="btn btn-primary py-3 mb-2">
                Back to Home
              </Link>
              <Link to="/products/bakery" className="btn btn-primary py-3 mb-2">
                Bakery
              </Link>
              <Link to="/products/dairy" className="btn btn-primary py-3 mb-2">
                Dairy
              </Link>
              <Link to="/products/meats" className="btn btn-primary py-3 mb-2">
                Meats
              </Link>
              <Link to="/products/fruit_veg" className="btn btn-primary py-3">
                Vegetables and Fruits
              </Link>
            </div>
          </div>

          <div className="col-md-8">
            {error && (
              <div className="alert alert-danger">
                <strong>Error!</strong> {error}
              </div>
            )}

            {loading ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "300px",
                }}
              >
                <LuPackageSearch
                  size={70}
                  className="icon-loader"
                  color="#0d6efd"
                />
                <p
                  className="mt-4 text-muted"
                  style={{ fontSize: "1.1rem", letterSpacing: "1px" }}
                >
                  System is scanning database...
                </p>
              </div>
            ) : (
              !error && (
                <table className="table table-striped table-hover table-info">
                  <tbody>
                    {products?.map((product: Product) => (
                      <tr key={product.id} className="align-middle">
                        <td>
                          <img
                            src={`/images/products/${product.name}.png`}
                            alt={product.name}
                            style={{
                              width: "60px",
                              height: "60px",
                              objectFit: "cover",
                            }}
                          />
                        </td>
                        <td className="fs-5 fw-bold">{product.name}</td>
                        <td className="fw-bold">${product.price}</td>
                        <td className="text-center">
                          <button
                            onClick={() => addToCart(product)}
                            className="btn btn-primary"
                          >
                            Add to Cart
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
