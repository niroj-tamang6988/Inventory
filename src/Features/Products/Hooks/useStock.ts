import { useState, useMemo } from "react";
import type { MenuItem } from "../Types";

type StockAdjustment = {
  id: number;
  itemId: number;
  type: "IN" | "OUT";
  quantity: number;
  note: string;
  createdAt: string;
};

type StockForm = {
  itemId: string;
  type: "IN" | "OUT";
  quantity: string;
  note: string;
};

export function useStock(items: MenuItem[]) {
  const [stockAdjustments, setStockAdjustments] = useState<StockAdjustment[]>([
    { id: 1, itemId: 1, type: "IN", quantity: 40, note: "Initial receiving", createdAt: new Date().toISOString() },
    { id: 2, itemId: 2, type: "IN", quantity: 28, note: "Initial receiving", createdAt: new Date().toISOString() },
    { id: 3, itemId: 3, type: "IN", quantity: 15, note: "Initial receiving", createdAt: new Date().toISOString() },
  ]);

  const [stockForm, setStockForm] = useState<StockForm>({
    itemId: items.length ? String(items[0].id) : "",
    type: "IN",
    quantity: "",
    note: "",
  });

  const [feedback, setFeedback] = useState("");

  const stockByItem = useMemo(() => {
    const totals: Record<number, number> = {};
    for (const adj of stockAdjustments) {
      totals[adj.itemId] = (totals[adj.itemId] ?? 0) + (adj.type === "IN" ? adj.quantity : -adj.quantity);
    }
    return totals;
  }, [stockAdjustments]);

  const handleAddStockAdjustment = () => {
    const itemId = Number(stockForm.itemId);
    const quantity = Number(stockForm.quantity);
    const note = stockForm.note.trim();

    if (!itemId || isNaN(quantity) || quantity <= 0) {
      setFeedback("Choose a product and enter a valid quantity.");
      return;
    }

    const currentStock = stockByItem[itemId] ?? 0;
    if (stockForm.type === "OUT" && quantity > currentStock) {
      setFeedback("Stock out cannot exceed current stock.");
      return;
    }

    setStockAdjustments((prev) => {
      const nextId = prev.length ? Math.max(...prev.map((e) => e.id)) + 1 : 1;
      return [
        { id: nextId, itemId, type: stockForm.type, quantity, note: note || "Manual adjustment", createdAt: new Date().toISOString() },
        ...prev,
      ];
    });

    setStockForm((prev) => ({ ...prev, quantity: "", note: "" }));
    setFeedback("Stock updated successfully.");
  };

  return { stockAdjustments, stockForm, setStockForm, stockByItem, handleAddStockAdjustment, feedback };
}
