import React from 'react';

interface OrderStatusPopupProps {
  status: string;
  onClose: () => void;
}

const OrderStatusPopup: React.FC<OrderStatusPopupProps> = ({
  status,
  onClose,
}) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-white p-6 rounded-lg shadow-lg text-center'>
        <h2 className='text-xl font-bold mb-4'>Order Status</h2>
        <p className='text-lg'>{status}</p>
        <button
          onClick={onClose}
          className='mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default OrderStatusPopup;
