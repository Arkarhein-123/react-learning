import { useEffect } from "react";
import { useProduct } from "./useProduct";

export default function useFetchProduct(category: string) {
  const { state, fetchProduct } = useProduct();

  useEffect(() => {
    fetchProduct(category);
  }, []);

  return state;
}
