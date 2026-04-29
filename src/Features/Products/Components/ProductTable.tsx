import type { MenuItem } from "../Types";
import { toShortForm } from "../../../Lib/Utils";

type Props = {
  items: MenuItem[];
  shortForms: Record<number, string>;
  
  onEdit: (item: MenuItem) => void;
  onDelete: (id: number) => void;
};

function ProductTable({ items, shortForms, onEdit, onDelete }: Props) {
  return (
    <div className="overflow-hidden rounded-md border border-slate-200">
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-100 text-xs font-bold uppercase text-slate-600">
          <tr>
            <th className="px-3 py-2">Product</th>
            <th className="px-3 py-2">Short Form</th>
            <th className="px-3 py-2">Category</th>
            <th className="px-3 py-2">Description</th>
            <th className="px-3 py-2">Rate</th>
            <th className="px-3 py-2">Stock</th>
            <th className="px-3 py-2">Availability</th>
            <th className="px-3 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-t border-slate-200">
              <td className="px-3 py-2 font-semibold text-slate-800">{item.name}</td>
              <td className="px-3 py-2">{shortForms[item.id] ?? toShortForm(item.name)}</td>
              <td className="px-3 py-2">{item.category_name}</td>
              <td className="px-3 py-2">{item.description}</td>
              <td className="px-3 py-2">{item.price}</td>
              
              <td className="px-3 py-2">
                <span className="px-3 py-2">
                  {item.is_available ? "Available" : "Unavailable"}
                </span>
              </td>
              <td className="px-3 py-2">
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => onEdit(item)}
                    className="cursor-pointer rounded border border-slate-300 px-2 py-1 text-xs font-semibold text-slate-700"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => onDelete(item.id)}
                    className="cursor-pointer rounded border border-rose-300 bg-rose-50 px-2 py-1 text-xs font-semibold text-rose-700"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
          {items.length === 0 && (
            <tr>
              <td colSpan={8} className="px-3 py-6 text-center text-sm text-slate-500">
                No products yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
