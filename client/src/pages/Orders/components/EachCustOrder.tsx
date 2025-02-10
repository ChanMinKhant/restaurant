import { useState } from 'react';
import { FaClock, FaCheckCircle, FaTimesCircle, FaTruck } from 'react-icons/fa';
// import ProgressBar from './ProgressBar'; // Import ProgressBar component
import OrderProgress from './OrderProgress';
import { PiDotsThreeCircle } from 'react-icons/pi';
import OrderDetail from '../../../components/OrderDetail';

interface EachCustOrderProps {
  id: number;
  foodName: string;
  image: string;
  price: number;
  estimatedTime: string;
  status: 'Pending' | 'Preparing' | 'Ready' | 'Delivered';
}

const EachCustOrder: React.FC<EachCustOrderProps> = ({
  id,
  foodName,
  image,
  price,
  estimatedTime,
  status,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [orderStatus, setOrderStatus] = useState(status);
  const [userType, setUserType] = useState<string>('admin');
  // Determine progress percentage based on status
  //   const getProgress = () => {
  //     switch (orderStatus) {
  //       case 'Pending':
  //         return 20;
  //       case 'Preparing':
  //         return 50;
  //       case 'On the Way':
  //         return 80;
  //       case 'Delivered':
  //         return 100;
  //       default:
  //         return 0;
  //     }
  //   };

  return (
    <div className='flex md:flex-row flex-col justify-evenly px-4 py-3 mx-4 my-4 w-[96%] bg-[#daf5e1] rounded-md shadow-md'>
      {/* Food Image */}
      <div className='flex items-center gap-2'>
        <img
          src={image}
          alt={foodName}
          className='md:w-[200px] md:h-[200px] w-full h-32 rounded-md object-cover'
        />
      </div>

      {/* Order Details */}
      <div className='flex flex-col justify-between flex-1 px-4'>
        <h3 className='text-lg flex justify-between w-[200px] items-center font-semibold'>
          <span> {foodName} </span>
          <button
            onClick={openModal}
            className='mt-2 bg-blue-500 hover:bg-blue-600 text-black font-semibold py-1 px-1 rounded-full transition-all duration-300'
          >
            <PiDotsThreeCircle size={24} className='text-white' />
          </button>

          <OrderDetail isOpen={isModalOpen} onClose={closeModal} />
        </h3>
        <p className='text-gray-700'>${price.toFixed(2)}</p>

        {/* Estimated Time */}
        <div className='flex items-center gap-2 text-gray-700'>
          <FaClock className='text-blue-500' />
          <span>Est. {estimatedTime}</span>
        </div>

        {/* Order Status */}
        <div className='flex items-center gap-2'>
          {orderStatus === 'Delivered' ? (
            <FaCheckCircle className='text-green-600' />
          ) : orderStatus === 'Ready' ? (
            <FaTruck className='text-yellow-500' />
          ) : orderStatus === 'Preparing' ? (
            <FaClock className='text-orange-500' />
          ) : (
            <FaTimesCircle className='text-red-500' />
          )}
          <span className='font-medium'>{orderStatus}</span>
        </div>

        {/* Progress Bar */}
        {/* <ProgressBar progress={getProgress()} /> */}
        <OrderProgress userType={userType} status={orderStatus} />
      </div>

      {/* Action Buttons */}
      <div className='flex flex-col justify-between items-end'>
        {/* <button className='bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition'>
          Track Order
        </button> */}

        {orderStatus === 'Pending' &&
        (userType === 'customer' || userType === 'admin') ? (
          <div className='flex md:justify-end justify-center items-center md:w-auto w-full'>
            <button className='bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 transition mt-2'>
              Cancel Order
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default EachCustOrder;
