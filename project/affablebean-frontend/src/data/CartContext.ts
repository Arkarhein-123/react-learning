import { createContext } from "react";
import type { CartItem, Product } from "./Type";

export interface CartContextType {
  items: CartItem[];
  totalAmount: number;
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  itemsCount: number;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);
