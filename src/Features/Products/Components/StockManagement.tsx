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

type Props = {
  items: MenuItem[];
  stockAdjustments: StockAdjustment[];
  stockForm: StockForm;
  setStockForm: (updater: (prev: StockForm) => StockForm) => void;
  handleAddStockAdjustment: () => void;
  feedback: string;
};

function StockManagement({ items, 
                           stockAdjustments, 
                           stockForm, 
                           setStockForm, 
                           handleAddStockAdjustment, 
                           feedback }: Props) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-4">
      <header className="mb-3 border-b border-slate-200 pb-3">
        <h3 className="text-xl font-black">Stock Management</h3>
        <p className="text-sm text-slate-600">Post stock in/out entries and track movement history.</p>
      </header>

      <div className="mb-3 grid gap-2 md:grid-cols-5">
        <select
          value={stockForm.itemId}
          onChange={(event) => setStockForm((prev) => ({ ...prev, itemId: event.target.value }))}
          className="h-10 rounded-md border border-slate-300 bg-white px-3 text-sm"
        >
          {items.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        <select
          value={stockForm.type}
          onChange={(event) => setStockForm((prev) => ({ ...prev, type: event.target.value as "IN" | "OUT" }))}
          className="h-10 rounded-md border border-slate-300 bg-white px-3 text-sm"
        >
          <option value="IN">Stock In</option>
          <option value="OUT">Stock Out</option>
        </select>
        <input
          type="number"
          min="1"
          placeholder="Quantity"
          value={stockForm.quantity}
          onChange={(event) => setStockForm((prev) => ({ ...prev, quantity: event.target.value }))}
          className="h-10 rounded-md border border-slate-300 bg-white px-3 text-sm"
        />
        <input
          type="text"
          placeholder="Note"
          value={stockForm.note}
          onChange={(event) => setStockForm((prev) => ({ ...prev, note: event.target.value }))}
          className="h-10 rounded-md border border-slate-300 bg-white px-3 text-sm"
        />
        <button
          type="button"
          onClick={handleAddStockAdjustment}
          className="h-10 cursor-pointer rounded-md bg-cyan-600 px-3 text-sm font-semibold text-white"
        >
          Add Stock Entry
        </button>
      </div>

      {feedback ? <p className="mb-3 text-sm font-semibold text-cyan-700">{feedback}</p> : null}

      <div className="overflow-hidden rounded-md border border-slate-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-100 text-xs font-bold uppercase text-slate-600">
            <tr>
              <th className="px-3 py-2">Date</th>
              <th className="px-3 py-2">Product</th>
              <th className="px-3 py-2">Type</th>
              <th className="px-3 py-2">Qty</th>
              <th className="px-3 py-2">Note</th>
            </tr>
          </thead>
          <tbody>
            {stockAdjustments.map((entry) => {
              const product = items.find((item) => item.id === entry.itemId);
              return (
                <tr key={entry.id} className="border-t border-slate-200">
                  <td className="px-3 py-2">{new Date(entry.createdAt).toLocaleString()}</td>
                  <td className="px-3 py-2 font-semibold text-slate-800">{product?.name ?? "Deleted Product"}</td>
                  <td className="px-3 py-2">{entry.type}</td>
                  <td className="px-3 py-2">{entry.quantity}</td>
                  <td className="px-3 py-2">{entry.note}</td>
                </tr>
              );
            })}
            {stockAdjustments.length === 0 && (
              <tr>
                <td colSpan={5} className="px-3 py-6 text-center text-sm text-slate-500">
                  No stock entries yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default StockManagement;


