import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TableItem {
  foodName: string;
  quantity: number;
  price: number;
  image: string;
}

interface TableOrder {
  tableNo: number;
  customerName: string;
  items: TableItem[];
  totalPrice: number;
  status: 'Pending' | 'Preparing' | 'Ready' | 'Delivered';
  estimatedTime: string;
  phoneNumber: string;
  address: string;
}

interface TableState {
  tables: TableOrder[];
}

// const initialState: TableState = {
//   tables: [],
// };
const initialState: TableState = {
  tables: [
    {
      tableNo: 1,
      customerName: 'John Doe',
      items: [
        {
          foodName: 'Chicken Burger',
          quantity: 2,
          price: 5.99,
          image: '/chicken_burger.jpg',
        },
        {
          foodName: 'French Fries',
          quantity: 1,
          price: 2.99,
          image: '/fries.jpg',
        },
      ],
      totalPrice: 14.97,
      status: 'Preparing',
      estimatedTime: '20 min',
      phoneNumber: '123-456-7890',
      address: '123 Main St, New York, NY',
    },
    {
      tableNo: 2,
      customerName: 'Alice Johnson',
      items: [
        {
          foodName: 'Pepperoni Pizza',
          quantity: 1,
          price: 12.99,
          image: '/pizza.jpg',
        },
        {
          foodName: 'Caesar Salad',
          quantity: 1,
          price: 6.49,
          image: '/salad.jpg',
        },
      ],
      totalPrice: 19.48,
      status: 'Pending',
      estimatedTime: '30 min',
      phoneNumber: '987-654-3210',
      address: '456 Elm St, Los Angeles, CA',
    },
    {
      tableNo: 3,
      customerName: 'Michael Smith',
      items: [
        {
          foodName: 'Spaghetti Carbonara',
          quantity: 1,
          price: 10.99,
          image: '/carbonara.jpg',
        },
      ],
      totalPrice: 10.99,
      status: 'Ready',
      estimatedTime: '5 min',
      phoneNumber: '555-123-4567',
      address: '789 Oak St, Chicago, IL',
    },
  ],
};

const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    addToTable: (
      state,
      action: PayloadAction<{ tableNo: number; item: TableItem }>,
    ) => {
      const { tableNo, item } = action.payload;
      const table = state.tables.find((t) => t.tableNo === tableNo);

      if (table) {
        // Check if item exists in the table order
        const existingItem = table.items.find(
          (i) => i.foodName === item.foodName,
        );
        if (existingItem) {
          existingItem.quantity += item.quantity;
        } else {
          table.items.push(item);
        }
        table.totalPrice = table.items.reduce(
          (sum, i) => sum + i.price * i.quantity,
          0,
        );
      } else {
        // If the table does not exist, create a new order
        state.tables.push({
          tableNo,
          customerName: 'Guest',
          items: [item],
          totalPrice: item.price * item.quantity,
          status: 'Pending',
          estimatedTime: '30 min',
          phoneNumber: '',
          address: '',
        });
      }
    },

    removeFromTable: (
      state,
      action: PayloadAction<{ tableNo: number; foodName: string }>,
    ) => {
      const { tableNo, foodName } = action.payload;
      const table = state.tables.find((t) => t.tableNo === tableNo);

      if (table) {
        table.items = table.items.filter((i) => i.foodName !== foodName);
        table.totalPrice = table.items.reduce(
          (sum, i) => sum + i.price * i.quantity,
          0,
        );

        // If no items left, remove the table order
        if (table.items.length === 0) {
          state.tables = state.tables.filter((t) => t.tableNo !== tableNo);
        }
      }
    },

    updateOrderStatus: (
      state,
      action: PayloadAction<{
        tableNo: number;
        status: 'Pending' | 'Preparing' | 'Ready' | 'Delivered';
      }>,
    ) => {
      const table = state.tables.find(
        (t) => t.tableNo === action.payload.tableNo,
      );
      if (table) {
        table.status = action.payload.status;
      }
    },

    clearTable: (state, action: PayloadAction<number>) => {
      state.tables = state.tables.filter((t) => t.tableNo !== action.payload);
    },
  },
});

export const { addToTable, removeFromTable, updateOrderStatus, clearTable } =
  tableSlice.actions;
export default tableSlice.reducer;
