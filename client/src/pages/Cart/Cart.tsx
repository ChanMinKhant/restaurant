import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import {
  removeFromCart,
  updateQuantity,
  clearCart,
} from '../../store/features/cartSlice';
import { ImCancelCircle } from 'react-icons/im';

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalPrice } = useSelector(
    (state: RootState) => state.cart,
  );

  // State for order type and payment method
  const [orderType, setOrderType] = useState('dine-in');
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [tableNumber, setTableNumber] = useState('');
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
  });

  return (
    <div className='p-6 max-w-3xl mx-auto mt-15 bg-white shadow-lg rounded-lg'>
      <h2 className='text-3xl font-extrabold text-gray-800 mb-4'>
        Shopping Cart 🛒
      </h2>

      {items.length === 0 ? (
        <p className='mt-4 text-lg w-full h-[100vh] flex justify-center items-center font-extrabold text-gray-500'>
          Your cart is empty.
        </p>
      ) : (
        <div className='mt-4'>
          {/* Cart Items */}
          <div className='space-y-4'>
            {items.map((item) => (
              <div
                key={item.id}
                className='flex justify-between items-center bg-gray-100 p-2 rounded-lg shadow-md'
              >
                <div className='flex items-center gap-4'>
                  <img
                    src={item.image}
                    alt={item.name}
                    className='w-30 h-30 object-cover rounded-lg shadow-sm'
                  />
                  <div>
                    <h3 className='text-lg font-bold text-black'>
                      {item.name}
                    </h3>
                    <p className='text-[#f59b42] text-sm'>
                      ${item.price.toFixed(2)} each
                    </p>
                    <p className='font-bold text-[#9f02cf]'>
                      Total: ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className='flex items-center gap-4'>
                  <div className='flex border rounded-lg'>
                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: Math.max(1, item.quantity - 1),
                          }),
                        )
                      }
                      className='px-3 py-1 bg-gray-200 hover:bg-gray-300 text-black rounded-l-lg'
                    >
                      -
                    </button>
                    <span className='w-12 text-center border-x px-2'>
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: item.quantity + 1,
                          }),
                        )
                      }
                      className='px-3 py-1 bg-gray-200 hover:bg-gray-300 text-black rounded-r-lg'
                    >
                      +
                    </button>
                  </div>

                  {/* Remove Button */}

                  <ImCancelCircle
                    className='text-red-500 hover:text-red-600 mr-4'
                    onClick={() => dispatch(removeFromCart(item.id))}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className='mt-6 border-t pt-4'>
            <h3 className='text-xl font-semibold text-gray-800'>
              Order Summary
            </h3>
            <p className='text-gray-600'>Total Items: {totalQuantity}</p>
            <p className='text-gray-800 font-bold text-lg'>
              Grand Total: ${totalPrice.toFixed(2)}
            </p>
          </div>

          {/* Order Type Selection */}
          <div className='mt-4'>
            <h3 className='text-lg font-semibold text-gray-800'>Order Type</h3>
            <select
              value={orderType}
              onChange={(e) => setOrderType(e.target.value)}
              className='w-full p-2 border border-gray-300 rounded-md'
            >
              <option value='dine-in'>Dine-in</option>
              <option value='takeaway'>Takeaway</option>
              <option value='delivery'>Delivery</option>
            </select>
          </div>

          {/* Conditional Inputs Based on Order Type */}
          {orderType === 'dine-in' || orderType === 'takeaway' ? (
            <div className='mt-4'>
              <label className='text-lg font-semibold text-gray-800'>
                Table Number
              </label>
              <input
                type='number'
                min={1}
                max={30}
                value={tableNumber}
                onChange={(e) => {
                  const value = Math.max(
                    1,
                    Math.min(30, Number(e.target.value)),
                  );
                  setTableNumber(value.toString());
                }}
                className='w-full p-2 border border-gray-300 rounded-md'
                placeholder='Enter table number'
              />
            </div>
          ) : orderType === 'delivery' ? (
            <div className='mt-4 space-y-2'>
              <label className='text-lg font-semibold text-gray-800'>
                Customer Details
              </label>
              <input
                type='text'
                value={customerDetails.name}
                onChange={(e) =>
                  setCustomerDetails({
                    ...customerDetails,
                    name: e.target.value,
                  })
                }
                className='w-full p-2 border border-gray-300 rounded-md'
                placeholder='Full Name'
              />
              <input
                type='tel'
                value={customerDetails.phone}
                onChange={(e) =>
                  setCustomerDetails({
                    ...customerDetails,
                    phone: e.target.value,
                  })
                }
                className='w-full p-2 border border-gray-300 rounded-md'
                placeholder='Phone Number'
              />

              <input
                type='text'
                value={customerDetails.address}
                onChange={(e) =>
                  setCustomerDetails({
                    ...customerDetails,
                    address: e.target.value,
                  })
                }
                className='w-full p-2 border border-gray-300 rounded-md'
                placeholder='Delivery Address'
              />
            </div>
          ) : null}

          <div className='mt-6 flex justify-between'>
            <button
              onClick={() => dispatch(clearCart())}
              className='px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500'
            >
              Clear Cart
            </button>
            <button className='bg-transparent mt-6 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
