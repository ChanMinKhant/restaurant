import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

// const initialState: CartState = {
//   items: [
//     {
//       id: '1',

//       name: 'Cheese Burger',
//       price: 5.99,
//       quantity: 2,
//       image: '/cheeseburger.jpg',
//     },
//     {
//       id: '2',
//       name: 'Margherita Pizza',
//       price: 9.99,
//       quantity: 1,
//       image: '/margheritapizza.jpg',
//     },
//     {
//       id: '3',
//       name: 'Chocolate Shake',
//       price: 3.49,
//       quantity: 3,
//       image: '/chocolateshake.jpg',
//     },
//   ],
//   totalQuantity: 6,
//   totalPrice: 5.99 * 2 + 9.99 * 1 + 3.49 * 3,
// };
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push({
          ...action.payload,
          quantity: action.payload.quantity,
        });
      }
      state.totalQuantity += action.payload.quantity;
      state.totalPrice += action.payload.price * action.payload.quantity;
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload,
      );
      if (itemIndex !== -1) {
        state.totalQuantity -= state.items[itemIndex].quantity;
        state.totalPrice -=
          state.items[itemIndex].price * state.items[itemIndex].quantity;
        state.items.splice(itemIndex, 1);
      }
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>,
    ) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        state.totalQuantity += action.payload.quantity - item.quantity;
        state.totalPrice +=
          (action.payload.quantity - item.quantity) * item.price;
        item.quantity = action.payload.quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
