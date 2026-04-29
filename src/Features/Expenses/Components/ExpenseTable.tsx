import type { ExpenseEntry } from "../Types/Index";

type ExpenseForm = {
  receivingParty: string;
  category: string;
  amount: string;
  date: string;
};

type Props = {
  expenseEntries: ExpenseEntry[];
  expenseForm: ExpenseForm;
  setExpenseForm: (updater: (prev: ExpenseForm) => ExpenseForm) => void;
  expenseCategories: string[];
  newExpenseCategory: string;
  setNewExpenseCategory: (val: string) => void;
  handleAddExpense: () => void;
  handleAddExpenseCategory: () => void;
  feedback: string;
};

function ExpenseTable({
  expenseEntries,
  expenseForm,
  setExpenseForm,
  expenseCategories,
  newExpenseCategory,
  setNewExpenseCategory,
  handleAddExpense,
  handleAddExpenseCategory,
  feedback,
}: Props) {

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-4">
      <header className="mb-4 border-b border-slate-200 pb-3">
        <h2 className="text-2xl font-black tracking-tight">Expenses</h2>
        <p className="text-sm text-slate-600">Track expense details by receiving party, category, amount, and date.</p>
      </header>

      <div className="mb-3 grid gap-2 md:grid-cols-5">
        <input
          type="text"
          placeholder="Receiving Party"
          value={expenseForm.receivingParty}
          onChange={(event) => setExpenseForm((prev) => ({ ...prev, receivingParty: event.target.value }))}
          className="h-10 rounded-md border border-slate-300 bg-white px-3 text-sm"
        />
        <select
          value={expenseForm.category}
          onChange={(event) => setExpenseForm((prev) => ({ ...prev, category: event.target.value }))}
          className="h-10 rounded-md border border-slate-300 bg-white px-3 text-sm"
        >
          {expenseCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <input
          type="number"
          min="0"
          step="0.01"
          placeholder="Amount Given"
          value={expenseForm.amount}
          onChange={(event) => setExpenseForm((prev) => ({ ...prev, amount: event.target.value }))}
          className="h-10 rounded-md border border-slate-300 bg-white px-3 text-sm"
        />
        <input
          type="date"
          value={expenseForm.date}
          onChange={(event) => setExpenseForm((prev) => ({ ...prev, date: event.target.value }))}
          className="h-10 rounded-md border border-slate-300 bg-white px-3 text-sm"
        />
        <div className="flex flex-wrap gap-2 md:col-span-2">
          <input
            type="text"
            placeholder="New Expense Category"
            value={newExpenseCategory}
            onChange={(event) => setNewExpenseCategory(event.target.value)}
            className="h-10 flex-1 rounded-md border border-slate-300 bg-white px-3 text-sm"
          />
          <button
            type="button"
            onClick={handleAddExpenseCategory}
            className="h-10 cursor-pointer rounded-md border border-slate-300 px-3 text-sm font-semibold text-slate-700"
          >
            Create Category
          </button>
          <button
            type="button"
            onClick={handleAddExpense}
            className="h-10 cursor-pointer rounded-md bg-slate-900 px-3 text-sm font-semibold text-white"
          >
            Add Expense
          </button>
        </div>
      </div>

      {feedback ? <p className="mb-3 text-sm font-semibold text-cyan-700">{feedback}</p> : null}

     <div className="overflow-hidden rounded-md border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100 text-xs font-bold uppercase text-slate-600">
              <tr>
                <th className="px-3 py-2">SN</th>
                <th className="px-3 py-2">Receiving Party</th>
                <th className="px-3 py-2">Category</th>
                <th className="px-3 py-2">Amount Given</th>
                <th className="px-3 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {expenseEntries.map((entry, index) => (
                <tr key={entry.id} className="border-t border-slate-200">
                  <td className="px-3 py-2">{index + 1}</td>
                  <td className="px-3 py-2 font-semibold text-slate-800">{entry.receivingParty}</td>
                  <td className="px-3 py-2">{entry.category}</td>
                  <td className="px-3 py-2">{entry.amount.toFixed(2)}</td>
                  <td className="px-3 py-2">{entry.date}</td>
                </tr>
              ))}
              {expenseEntries.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-3 py-6 text-center text-sm text-slate-500">
                    No expenses recorded yet.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </section>
    
  );
}

export default ExpenseTable;
