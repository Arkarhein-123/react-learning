import { BrowserRouter, Route, Routes } from "react-router";
import HeaderComponent from "./components/HeaderComponent";
import HomeComponent from "./components/HomeComponent";
import ProductComponent from "./components/ProductComponent";
import ProductProvider from "./data/ProductProvider";
import CartContextProvider from "./data/CartContextProvider";
import CartComponent from "./components/CartComponent";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <CartContextProvider>
          <HeaderComponent />

          <ProductProvider>
            <Routes>
              <Route path="/" element={<HomeComponent />} />
              <Route
                path="/products/:category"
                element={<ProductComponent />}
              />
              <Route path="/cart" element={<CartComponent />} />
            </Routes>
          </ProductProvider>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}
