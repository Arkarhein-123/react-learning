import { useState, type ReactNode } from "react";
import type { CartItem, Product } from "./Type";
import { CartContext, type CartContextType } from "./CartContext";

export default function CartContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cartItems, setCartIems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCartIems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCartIems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCartIems([]);

  const increaseQty = (id: number) => {
    setCartIems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQty = (id: number) => {
    setCartIems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item,
      ),
    );
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const itemsCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const value: CartContextType = {
    items: cartItems,
    totalAmount,
    itemsCount,
    addToCart,
    removeFromCart,
    clearCart,
    increaseQty,
    decreaseQty,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
