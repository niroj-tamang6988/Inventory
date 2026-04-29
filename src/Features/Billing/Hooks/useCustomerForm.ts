import { useState } from "react";
import type { Customers } from "../Types/index";

type CustomerForm = {
  name: string;
  phone: string;
  pan: string;
  email: string;
  address: string;
};

export function useCustomerForm(onAdd: (customer: Omit<Customers, "id">) => void) {
  const [customerForm, setCustomerForm] = useState<CustomerForm>({
    name: "",
    phone: "",
    pan: "",
    email: "",
    address: "",
  });
  const [feedback, setFeedback] = useState("");

  const resetCustomerForm = () => {
    setCustomerForm({ name: "", phone: "", pan: "", email: "", address: "" });
  };

  const handleSaveCustomer = () => {
    const name = customerForm.name.trim();
    const phone = customerForm.phone.trim();

    if (!name || !phone) {
      setFeedback("Customer name and phone are required.");
      return;
    }

    onAdd({ name, phone, pan: customerForm.pan.trim(), email: customerForm.email.trim(), address: customerForm.address.trim() });
    resetCustomerForm();
    setFeedback("Customer added successfully.");
  };

  return { customerForm, setCustomerForm, handleSaveCustomer, resetCustomerForm, feedback };
}
