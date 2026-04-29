import type { MenuItem } from "../Features/Products/Types";


const nowIso = new Date().toISOString();

export const sidebarItems = [
  "Billing",
  "Products",
  "Vendors",
  "Sales Details",
  "Expenses",
];

export const customers = [
  { id: 1, name: "Anita Sharma", phone: "+977-980000001", pan: "123456789", email: "anita@example.com", address: "Kathmandu" },
  { id: 2, name: "Rohan KC", phone: "+977-980000002", pan: "987654321", email: "rohan@example.com", address: "Lalitpur" },
];



export const initialItems: MenuItem[] = [
  {
    id: 1,
    business_id: 1,
    business_name: "Inventory Demo",
    category_id: 1,
    category_name: "Appetizers",
    name: "Crispy Momos",
    description: "Deep-fried momos with house sauce",
    price: "250",
    image: null,
    spice_level_id: 3,
    spice_level_name: "Spicy",
    preparation_time: 12,
    is_available: true,
    created_at: nowIso,
    updated_at: nowIso,
  },
  {
    id: 2,
    business_id: 1,
    business_name: "Inventory Demo",
    category_id: 2,
    category_name: "Main Course",
    name: "Butter Chicken",
    description: "Creamy tomato gravy with tender chicken",
    price: "620",
    image: null,
    spice_level_id: 2,
    spice_level_name: "Mid",
    preparation_time: 20,
    is_available: true,
    created_at: nowIso,
    updated_at: nowIso,
  },
  {
    id: 3,
    business_id: 1,
    business_name: "Inventory Demo",
    category_id: 3,
    category_name: "Beverages",
    name: "Iced Lemon Tea",
    description: "Refreshing black tea with lemon and mint",
    price: "180",
    image: null,
    spice_level_id: 5,
    spice_level_name: "None",
    preparation_time: 6,
    is_available: false,
    created_at: nowIso,
    updated_at: nowIso,
  },
];
