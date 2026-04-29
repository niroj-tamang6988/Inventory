import ExpenseTable from "../Features/Expenses/Components/ExpenseTable"
import { useExpenseCategories } from "../Features/Expenses/Hooks/useExpenseCategories"
import { useExpenses } from "../Features/Expenses/Hooks/useExpenses"

function ExpensePage() {
  const { expenseCategories, 
          newExpenseCategory, 
          setNewExpenseCategory, 
          handleAddExpenseCategory, 
          feedback: categoryFeedback } = useExpenseCategories();
  const { expenseEntries, 
          expenseForm, 
          setExpenseForm, 
          handleAddExpense, 
          feedback: expenseFeedback } = useExpenses(expenseCategories);

  return (
    <ExpenseTable
      expenseEntries={expenseEntries}
      expenseForm={expenseForm}
      setExpenseForm={setExpenseForm}
      expenseCategories={expenseCategories}
      newExpenseCategory={newExpenseCategory}
      setNewExpenseCategory={setNewExpenseCategory}
      handleAddExpense={handleAddExpense}
      handleAddExpenseCategory={handleAddExpenseCategory}
      feedback={expenseFeedback || categoryFeedback}
    />
  );
}

export default ExpensePage;
