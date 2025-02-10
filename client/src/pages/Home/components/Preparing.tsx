import { useState } from 'react';
import FoodSlider from './FoodSlider';
import { button } from 'framer-motion/client';

function Preparing() {
  const [isOrderExist, setIsOrderExist] = useState<boolean>(true);
  return (
    <div className='w-full flex flex-col sm:flex-row sm:h-[250px] h-[400px] mt-[30px] items-start justify-start px-4'>
      <div className='flex flex-col w-full sm:w-[50%] px-2 mx-auto'>
        <FoodSlider />
      </div>
      {isOrderExist ? (
        <div className='flex flex-col sm:items-start items-center w-full sm:w-50% px-2 mx-auto justify-start px-2 mx-auto'>
          <div className='flex justify-between items-center px-[20px] py-3 w-full bg-[#f1f5f8] rounded-lg my-[5px] max-w-[600px]'>
            <span className=''>Ramen</span>
            <span>preparing...</span>
          </div>
          <div className='flex justify-between items-center px-[20px] py-3 w-full bg-[#f1f5f8] rounded-lg my-[5px] max-w-[600px]'>
            <span className=''>Ramen</span>
            <span>preparing...</span>
          </div>
        </div>
      ) : (
        <div className='w-full sm:w-[50%] sm:h-[200px] h-[180px]  px-4 mx-auto text-center py-10 bg-gray-100 rounded-lg shadow-md'>
          <h2 className='sm:text-2xl text-xl font-bold text-gray-800'>
            Hungry? Order Now!
          </h2>
          <p className='text-gray-600 mt-2'>
            Get your favorite meal delivered fast and fresh.
          </p>

          <button className='mt-5 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg transition-all duration-300'>
            Order Now
          </button>
        </div>
      )}
    </div>
  );
}

export default Preparing;
