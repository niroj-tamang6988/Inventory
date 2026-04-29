import { useState } from "react";

const initialCategories = ["Utilities", "Transport", "Supplies", "Maintenance"];

export function useExpenseCategories() {
  const [expenseCategories, setExpenseCategories] = useState<string[]>(initialCategories);
  const [newExpenseCategory, setNewExpenseCategory] = useState("");
  const [feedback, setFeedback] = useState("");


  // for creating new Category
  const handleAddExpenseCategory = () => {
    const category = newExpenseCategory.trim();

    if (!category) {
      setFeedback("Enter a category name before creating it.");
      return;
    }

    
    const exists = expenseCategories.some((c) => c.toLowerCase() === category.toLowerCase());
    if (exists) {
      setFeedback("That expense category already exists.");
      return;
    }

    setExpenseCategories((prev) => [...prev, category]);
    setNewExpenseCategory("");
    setFeedback(`Category "${category}" created.`);
  };

  return { expenseCategories, newExpenseCategory, setNewExpenseCategory, handleAddExpenseCategory, feedback };
}
