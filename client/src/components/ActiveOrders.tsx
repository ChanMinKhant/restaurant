import { useState } from 'react';
import { PiDotsThreeCircle } from 'react-icons/pi';
import OrderDetail from './OrderDetail';

function ActiveOrders() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className='flex w-full justify-between items-center border-b-2 border-gray-300 p-4'>
      <div className='flex flex-col'>
        <span className='font-medium  '>Pasta</span>
        <span className='text-sm'>preparing</span>
      </div>
      <div className='flex'></div>
      <button className='bg-red-500  text-sm text-white px-2 cursor-pointer py-2 rounded-md shadow-md hover:bg-red-600 transition mt-2'>
        Cancel Order
      </button>
      <button
        onClick={openModal}
        className='mt-2 cursor-pointer bg-blue-500 hover:bg-blue-600 text-black font-semibold py-1 px-1 rounded-full transition-all duration-300'
      >
        <PiDotsThreeCircle size={24} className='text-white' />
      </button>
      <OrderDetail isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default ActiveOrders;
