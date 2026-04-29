import Workspace from "../Features/Products/Components/Workspace"
import StockManagement from "../Features/Products/Components/StockManagement"
import { useProducts } from "../Features/Products/Hooks/useProducts"
import { useCategories } from "../Features/Products/Hooks/useCategories"
import { useStock } from "../Features/Products/Hooks/useStock"

function ProductPage() {
  const { categories, handleAddCategory } = useCategories();
  const {
    items,
    shortForms,
    stockByItem,
    productForm,
    setProductForm,
    editingProductId,
    handleSaveProduct,
    resetProductForm,
    handleEditProduct,
    handleDeleteProduct,
    feedback,
    clearFeedback,
  } = useProducts(categories);

  const { stockAdjustments, stockForm, setStockForm, handleAddStockAdjustment, feedback: stockFeedback } = useStock(items);

  return (
    <>
      <Workspace
        productForm={productForm}
        setProductForm={setProductForm}
        categories={categories}
        editingProductId={editingProductId}
        handleSaveProduct={handleSaveProduct}
        resetProductForm={resetProductForm}
        onAddCategory={() => handleAddCategory("New Category")}
        feedback={feedback}
        clearFeedback={clearFeedback}
        items={items}
        shortForms={shortForms}
        stockByItem={stockByItem}
        onEdit={handleEditProduct}
        onDelete={handleDeleteProduct}
      />
      <StockManagement
        items={items}
        stockAdjustments={stockAdjustments}
        stockForm={stockForm}
        setStockForm={setStockForm}
        handleAddStockAdjustment={handleAddStockAdjustment}
        feedback={stockFeedback}
      />
    </>
  );
}

export default ProductPage;
