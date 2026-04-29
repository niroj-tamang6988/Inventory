import CustomerTable from "../Features/Billing/Components/CustomerTable"
import FormField from "../Features/Billing/Components/FormField"
import { useCustomers } from "../Features/Billing/Hooks/useCustomers"

function BillingPage() {
  const { customers, handleAddCustomer } = useCustomers();

  return (
    <>
      <FormField onAdd={handleAddCustomer} customerCount={customers.length} />
      <CustomerTable customers={customers} />
    </>
  );
}

export default BillingPage;
