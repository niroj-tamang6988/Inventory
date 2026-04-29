import { useState } from "react";
import type { ExpenseEntry } from "../Types/Index";

type ExpenseForm = {
  receivingParty: string;
  category: string;
  amount: string;
  date: string;
};

export function useExpenses(expenseCategories: string[]) {
  const [expenseEntries, setExpenseEntries] = useState<ExpenseEntry[]>([]);
  const [expenseForm, setExpenseForm] = useState<ExpenseForm>({
    receivingParty: "",
    category: expenseCategories[0] ?? "",
    amount: "",
    date: new Date().toISOString().slice(0, 10),
  });
  const [feedback, setFeedback] = useState("");

  const handleAddExpense = () => {
    const receivingParty = expenseForm.receivingParty.trim();
    const category = expenseForm.category.trim();
    const amount = Number(expenseForm.amount);
    const date = expenseForm.date;

    if (!receivingParty || !category || isNaN(amount) || amount <= 0 || !date) {
      setFeedback("Enter Receiving Party, Category, valid Amount, and Date.");
      return;
    }

    setExpenseEntries((prev) => {
      const nextId = prev.length ? Math.max(...prev.map((e) => e.id)) + 1 : 1;
      return [{ id: nextId, receivingParty, category, amount, date }, ...prev];
    });

    setExpenseForm({
      receivingParty: "",
      category: expenseCategories[0] ?? "",
      amount: "",
      date: new Date().toISOString().slice(0, 10),
    });
    setFeedback("Expense added successfully.");
  };

  return { expenseEntries, expenseForm, setExpenseForm, handleAddExpense, feedback };
}
