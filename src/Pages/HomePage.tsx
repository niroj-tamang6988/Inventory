import DashboardHeader from "../Components/Layouts/DashboardHeader"
import { Sidebar } from "../Components/Layouts/SideBar"
import { useState } from "react"
import BillingPage from "./BillingPage"
import ProductsPage from "./ProductPage"
import ExpensePage from "./ExpensePage"
import VendorPage from "./VendorPage"
import SalesDetailsPage from "./SalesDetailsPage"

function HomePage(){

    const [activeModule, setActiveModule] = useState("Products");

  const handleSelect = (module: string) => {
    setActiveModule(module);
  };

    return(
        <div className="min-h-screen bg-slate-100">
           <DashboardHeader/>
           <div className="grid md:grid-cols-[260px_1fr]">
             <Sidebar
              activeModule={activeModule}
              onSelect={handleSelect}/>
             <main className="p-6">
               {activeModule === "Billing" && <BillingPage/>}
               {activeModule === "Products" && <ProductsPage/>}
               {activeModule === "Expenses" && <ExpensePage/>}
               {activeModule === "Vendors" && <VendorPage/>}
               {activeModule === "Sales Details" && <SalesDetailsPage/>}

             </main>

             
           </div>
        </div>


    )
}
export default HomePage