import { useState } from "react";
import type { Customers } from "../Types/index";
import { customers as initialCustomers } from "../../../Config/Mockdata";

export function useCustomers() {
  const [customers, setCustomers] = useState<Customers[]>(initialCustomers);

  const handleAddCustomer = (customer: Omit<Customers, "id">) => {
    setCustomers((prev) => {
      const nextId = prev.length ? 
                  Math.max(...prev.map((c) => 
                    c.id)) + 1 : 1;
      return [...prev, { ...customer, id: nextId }];
    });
  };

  return { customers, handleAddCustomer };
}
