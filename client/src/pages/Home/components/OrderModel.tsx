import React, { useState } from 'react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose }) => {
  const [orderType, setOrderType] = useState<string>('online'); // online or dine
  const [quantity, setQuantity] = useState<number>(1);
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [tableNumber, setTableNumber] = useState<number | ''>('');

  // Handle Submit
  const handleSubmit = () => {
    if (orderType === 'online' && (!phone || !address)) {
      alert('Please provide phone number and address for online orders.');
      return;
    }
    if (orderType === 'dine' && (!tableNumber || !quantity)) {
      alert('Please provide table number and quantity for dine-in orders.');
      return;
    }
    alert('Order placed successfully!');
    onClose(); // Close the modal after submitting
  };

  return (
    <>
      {isOpen && (
        <div className='fixed text-black inset-0 bg-opacity-50 flex justify-center items-center z-50'>
          <div className='bg-white p-6 rounded-lg shadow-lg w-96'>
            <h2 className='text-2xl font-semibold mb-4'>Place Your Order</h2>

            <div className='mb-4'>
              <label className='block text-lg font-medium'>Order Type</label>
              <select
                value={orderType}
                onChange={(e) => setOrderType(e.target.value)}
                className='w-full p-2 border border-gray-300 rounded-md'
              >
                <option value='online'>Online Order</option>
                <option value='dine'>Dine at Restaurant</option>
              </select>
            </div>

            {orderType === 'online' && (
              <>
                <div className='mb-4'>
                  <label className='block text-lg font-medium'>
                    Phone Number
                  </label>
                  <input
                    type='text'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder='Enter your phone number'
                    className='w-full p-2 border border-gray-300 rounded-md'
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-lg font-medium'>
                    Delivery Address
                  </label>
                  <input
                    type='text'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder='Enter your address'
                    className='w-full p-2 border border-gray-300 rounded-md'
                  />
                </div>
              </>
            )}

            {orderType === 'dine' && (
              <>
                <div className='mb-4'>
                  <label className='block text-lg font-medium'>
                    Table Number
                  </label>
                  <input
                    type='number'
                    value={tableNumber}
                    onChange={(e) => setTableNumber(Number(e.target.value))}
                    placeholder='Enter your table number'
                    className='w-full p-2 border border-gray-300 rounded-md'
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-lg font-medium'>Quantity</label>
                  <input
                    type='number'
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    placeholder='Enter quantity'
                    className='w-full p-2 border border-gray-300 rounded-md'
                    min='1'
                  />
                </div>
              </>
            )}

            <div className='mb-4 flex gap-4'>
              <button
                onClick={handleSubmit}
                className='bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600'
              >
                Submit Order
              </button>
              <button
                onClick={onClose}
                className='bg-gray-300 text-black py-2 px-4 rounded-lg hover:bg-gray-400'
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderModal;
