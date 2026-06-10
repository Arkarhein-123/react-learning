import { createContext } from "react";
import type { ProductState } from "./Type";

interface ProductContextType {
    state: ProductState
    fetchProduct: (category: string) => Promise<void>
}

export const ProductContext = createContext<ProductContextType | undefined>(undefined);