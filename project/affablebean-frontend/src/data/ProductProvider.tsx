import { useReducer, type ReactNode } from "react";
import { productReducer } from "./ProductReducer";
import { initialState, type Product } from "./Type";
import axios from "axios";
import { ProductContext } from "./ProductContextType";

export default function ProductProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(productReducer, initialState);

  // This function will only run when you call it manually
  const fetchProduct = async (category: string) => {
    dispatch({ type: "FETCH_START" });
    try {
      const response = await axios.get<Product[]>(
        `http://localhost:8080/api/backend/products/${category}`,
      );
      setTimeout(() => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      }, 1000);
    } catch (e) {
      const errorMessage = e + "Error fetching data";
      dispatch({ type: "FETCH_ERROR", payload: errorMessage });
    }
  };

  return (
    <ProductContext.Provider value={{ state, fetchProduct }}>
      {children}
    </ProductContext.Provider>
  );
}
