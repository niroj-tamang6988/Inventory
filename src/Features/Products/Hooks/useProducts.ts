import { useState} from "react";
import type { MenuItem, Category } from "../Types";
import { initialItems } from "../../../Config/Mockdata";
import { toShortForm } from "../../../Lib/Utils";
import { useModuleFeedback } from "./ModuleFeedback";

type ProductForm = {
  name: string;
  shortForm: string;
  categoryId: string;
  price: string;
  description: string;
  isAvailable: boolean;
};

export function useProducts(categories: Category[]) {
  const [items, setItems] = useState<MenuItem[]>(initialItems);
  const { feedback, showFeedback, clearFeedback } = useModuleFeedback();
  const [shortForms, setShortForms] = useState<Record<number, string>>(() =>
    Object.fromEntries(initialItems.map((item) => [item.id, toShortForm(item.name)]))
  );
  
  const [editingProductId, setEditingProductId] = useState<number | null>(null);
  const [productForm, setProductForm] = useState<ProductForm>({
    name: "",
    shortForm: "",
    categoryId: categories.length ? String(categories[0].id) : "",
    price: "",
    description: "",
    isAvailable: true,
  });

  const resetProductForm = () => {
    setProductForm({
      name: "",
      shortForm: "",
      categoryId: categories.length ? String(categories[0].id) : "",
      price: "",
      description: "",
      isAvailable: true,
    });
    setEditingProductId(null);
  };

  const handleSaveProduct = () => {
    const cleanName = productForm.name.trim();
    const cleanShortForm = productForm.shortForm.trim().toUpperCase() || toShortForm(cleanName);
    const cleanPrice = productForm.price.trim();
    const cleanDescription = productForm.description.trim();
    const categoryId = Number(productForm.categoryId);

    if (!cleanName || !cleanShortForm || !cleanPrice || !cleanDescription || !categoryId) {
      showFeedback("Name, short form, category, description, and rate are required.");
      return;
    }

    const category = categories.find((c) => c.id === categoryId);
    if (!category) return;

    if (editingProductId !== null) {
      setItems((prev) =>
        prev.map((item) =>
          item.id === editingProductId
            ? {
                ...item,
                name: cleanName,
                description: cleanDescription,
                category_id: category.id,
                category_name: category.name,
                price: cleanPrice,
                is_available: productForm.isAvailable,
                updated_at: new Date().toISOString(),
              }
            : item,
        ),
      );
      setEditingProductId(null);
      showFeedback("Product updated.");
    } else {
      const nextId = items.length ? Math.max(...items.map((i) => i.id)) + 1 : 1;
      const stamp = new Date().toISOString();
      setItems((prev) => [
        {
          id: nextId,
          business_id: 1,
          business_name: "Inventory Demo",
          category_id: category.id,
          category_name: category.name,
          name: cleanName,
          description: cleanDescription,
          price: cleanPrice,
          image: null,
          spice_level_id: 5,
          spice_level_name: "None",
          preparation_time: 10,
          is_available: productForm.isAvailable,
          created_at: stamp,
          updated_at: stamp,
        },
        ...prev,
      ]);
    }

    setShortForms((prev) => ({ ...prev, 
                          [editingProductId ?? 
                            (items.length ? 
                              Math.max(...items.map((i) => 
                                i.id)) + 1 : 1)]: 
                              cleanShortForm }));
    showFeedback(editingProductId !== null ? "Product updated." : "Product created.");
    resetProductForm();
  };

  const handleEditProduct = (item: MenuItem) => {
    setEditingProductId(item.id);
    setProductForm({
      name: item.name,
      shortForm: shortForms[item.id] ?? 
        toShortForm(item.name),
      categoryId: String(item.category_id),
      price: item.price,
      description: item.description,
      isAvailable: item.is_available,
    });
  };

  const handleDeleteProduct = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
    setShortForms((prev) => { const next = { ...prev }; delete next[id]; return next; });
    if (editingProductId === id) resetProductForm();
    showFeedback(`Product #${id} deleted.`);
  };

  return { items, 
           shortForms,
           productForm, 
           setProductForm, 
           editingProductId, 
           handleSaveProduct, 
           resetProductForm, 
           handleEditProduct, 
           handleDeleteProduct, 
           feedback, 
           clearFeedback };
}
