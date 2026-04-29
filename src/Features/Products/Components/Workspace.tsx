import type { Category, MenuItem } from "../Types";
import ProductTable from "./ProductTable";

type ProductForm = {
  name: string;
  shortForm: string;
  categoryId: string;
  price: string;
  description: string;
  isAvailable: boolean;
};

type Props = {
  productForm: ProductForm;
  setProductForm: (updater: (prev: ProductForm) => ProductForm) => void;
  categories: Category[];
  editingProductId: number | null;
  handleSaveProduct: () => void;
  resetProductForm: () => void;
  onAddCategory: () => void;
  feedback: string;
  clearFeedback: () => void;
  items: MenuItem[];
  shortForms: Record<number, string>;
  stockByItem: Record<number, number>;
  onEdit: (item: MenuItem) => void;
  onDelete: (id: number) => void;
};

function Workspace({ productForm, 
                      setProductForm, 
                      categories, 
                      editingProductId, 
                      handleSaveProduct, 
                      resetProductForm, 
                      onAddCategory, 
                      feedback, 
                      clearFeedback, 
                      items, 
                      shortForms, 
                      onEdit, 
                      onDelete }: Props) {


    
  return (
    <section className="mb-4 rounded-lg border border-slate-200 bg-white p-4">
      <header className="mb-3 flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
        <div>
          <h2 className="text-2xl font-black tracking-tight">Inventory Workspace</h2>
          <p className="text-sm text-slate-600">Create, read, update, and delete products directly from this page.</p>
        </div>
        <button
          type="button"
          onClick={onAddCategory}
          className="h-10 cursor-pointer rounded-md border border-slate-300 px-3 text-sm font-semibold text-slate-700"
        >
          Add Category
        </button>
      </header>

      <div className="mb-3 grid gap-2 md:grid-cols-6">
        <input
          type="text"
          placeholder="Product Name"
          value={productForm.name}
          onChange={(e) => setProductForm((prev) => ({ ...prev, name: e.target.value }))}
          className="h-10 rounded-md border border-slate-300 bg-white px-3 text-sm"
        />
        <input
          type="text"
          placeholder="Short Form"
          value={productForm.shortForm}
          onChange={(e) => setProductForm((prev) => ({ ...prev, shortForm: e.target.value.toUpperCase() }))}
          className="h-10 rounded-md border border-slate-300 bg-white px-3 text-sm"
        />
        <select
          value={productForm.categoryId}
          onChange={(e) => setProductForm((prev) => ({ ...prev, categoryId: e.target.value }))}
          className="h-10 rounded-md border border-slate-300 bg-white px-3 text-sm"
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Rate"
          value={productForm.price}
          onChange={(e) => setProductForm((prev) => ({ ...prev, price: e.target.value }))}
          className="h-10 rounded-md border border-slate-300 bg-white px-3 text-sm"
        />
        <input
          type="text"
          placeholder="Description"
          value={productForm.description}
          onChange={(e) => setProductForm((prev) => ({ ...prev, description: e.target.value }))}
          className="h-10 rounded-md border border-slate-300 bg-white px-3 text-sm"
        />
        <label className="flex h-10 items-center gap-2 rounded-md border border-slate-300 bg-white px-3 text-sm text-slate-700">
          <input
            type="checkbox"
            checked={productForm.isAvailable}
            onChange={(e) => setProductForm((prev) => ({ ...prev, isAvailable: e.target.checked }))}
          />
          Available
        </label>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={handleSaveProduct}
            className="h-10 flex-1 cursor-pointer rounded-md bg-slate-900 px-3 text-sm font-semibold text-white"
          >
            {editingProductId === null ? "Create" : "Update"}
          </button>
          <button
            type="button"
            onClick={resetProductForm}
            className="h-10 cursor-pointer rounded-md border border-slate-300 px-3 text-sm font-semibold text-slate-700"
          >
            Clear
          </button>
        </div>
      </div>

      {feedback ? (
        <div className="mt-3 flex items-center justify-between rounded-md bg-emerald-50 px-3 py-2">
          <p className="text-sm font-semibold text-emerald-700">{feedback}</p>
          <button type="button" onClick={clearFeedback} className="text-xs text-slate-400 hover:text-slate-600">✕</button>
        </div>
      ) : null}

      <div className="mt-4">
        <ProductTable
          items={items}
          shortForms={shortForms}
          
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </div>
    </section>
  );
}

export default Workspace;
