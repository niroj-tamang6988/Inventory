import { useState } from "react";
import type { Category } from "../Types";

const initialCategories: Category[] = [
  { id: 1, business_id: 1, name: "Appetizers" },
  { id: 2, business_id: 1, name: "Main Course" },
  { id: 3, business_id: 1, name: "Beverages" },
  { id: 4, business_id: 1, name: "Desserts" },
];

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>(initialCategories);

  const handleAddCategory = (name: string) => {
    setCategories((prev) => {
      const nextId = prev.length ? Math.max(...prev.map((c) => c.id)) + 1 : 1;
      return [...prev, { id: nextId, business_id: 1, name }];
    });
  };

  return { categories, handleAddCategory };
}
