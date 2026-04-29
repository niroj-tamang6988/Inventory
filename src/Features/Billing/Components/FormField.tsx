import type { Customers } from "../Types"
import { useCustomerForm } from "../Hooks/useCustomerForm"

type Props = {
  onAdd: (customer: Omit<Customers, "id">) => void;
  customerCount: number;
};

function FormField({ onAdd, customerCount }: Props) {
  const { customerForm,
          setCustomerForm, 
          handleSaveCustomer, 
          resetCustomerForm, 
          feedback } = useCustomerForm(onAdd);



  return (
    <section className="mb-4 overflow-hidden rounded-lg border border-emerald-200 bg-white">
      <header className="border-b border-emerald-300 bg-emerald-700 px-4 py-3 text-white">
        <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-emerald-100">
          Workbook</p>
        <h2 className="text-xl font-black tracking-tight">BILLING_LEDGER.xlsx</h2>
        <p className="text-xs text-emerald-100">Saved Customers: {customerCount}</p>
      </header>

      <div className="border-b border-slate-200 bg-slate-50 px-4 py-2">
        <div className="grid gap-2 md:grid-cols-[88px_1fr]">
          <div className="flex h-9 items-center justify-center rounded border border-slate-300 bg-white text-xs font-semibold text-slate-600">
            A1:F1
          </div>
          <input
            type="text"
            value="Customer Input Sheet"
            readOnly
            className="h-9 rounded border border-slate-300 bg-white px-3 text-sm text-slate-700"
          />
        </div>
      </div>

      <div className="grid gap-2 bg-white px-4 py-3 md:grid-cols-6">
        <input
          type="text"
          placeholder="Customer Name"
          value={customerForm.name}
          onChange={(e) => setCustomerForm((prev) => ({ ...prev, name: e.target.value }))}
          className="h-10 border border-slate-300 bg-white px-3 text-sm focus:border-emerald-500 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Phone"
          value={customerForm.phone}
          onChange={(e) => setCustomerForm((prev) => ({ ...prev, phone: e.target.value }))}
          className="h-10 border border-slate-300 bg-white px-3 text-sm focus:border-emerald-500 focus:outline-none"
        />
        <input
          type="text"
          placeholder="PAN No"
          value={customerForm.pan}
          onChange={(e) => setCustomerForm((prev) => ({ ...prev, pan: e.target.value }))}
          className="h-10 border border-slate-300 bg-white px-3 text-sm focus:border-emerald-500 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          value={customerForm.email}
          onChange={(e) => setCustomerForm((prev) => ({ ...prev, email: e.target.value }))}
          className="h-10 border border-slate-300 bg-white px-3 text-sm focus:border-emerald-500 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Address"
          value={customerForm.address}
          onChange={(e) => setCustomerForm((prev) => ({ ...prev, address: e.target.value }))}
          className="h-10 border border-slate-300 bg-white px-3 text-sm focus:border-emerald-500 focus:outline-none"
        />
        <div className="flex gap-2">
          <button
            type="button"
            onClick={handleSaveCustomer}
            className="h-10 flex-1 cursor-pointer border border-emerald-700 bg-emerald-700 px-3 text-sm font-semibold text-white hover:bg-emerald-800"
          >
            Add
          </button>
          <button
            type="button"
            onClick={resetCustomerForm}
            className="h-10 cursor-pointer border border-slate-300 bg-white px-3 text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            Clear
          </button>
        </div>
      </div>

      {feedback ? (
        <div className="border-t border-slate-200 bg-emerald-50 px-4 py-2">
          <p className="text-sm font-semibold text-emerald-700">{feedback}</p>
        </div>
      ) : null}
    </section>
  );
}

export default FormField;
