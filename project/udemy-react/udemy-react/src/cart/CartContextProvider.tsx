import React, { useState } from "react";
import { CartContext } from "./CartContext";
import type { Course } from "../course/data/Course";

export default function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [items, setItems] = useState<Course[]>([]);

  const addItem = (course: Course) => {
    if (detectCourseDuplicate(course)) return;
    setItems([...items, course]);
    console.log(course);
  };

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.courseId !== id));
  };

  // 3. Implemented clearCart
  const clearCart = () => {
    setItems([]);
  };

  const totalCost = items.reduce((total, course) => total + course.fees, 0);

  const detectCourseDuplicate = (course: Course) => {
    return items.some((item) => item.courseId === course.courseId); // Check by title instead of courseId
  };

  const value = {
    items,
    addItem,
    removeItem,
    clearCart,
    totalCost,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
