import React, { useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa'; // Importing filled and empty star icons
import OrderModal from './OrderModel';

interface FoodCardProps {
  image: string;
  name: string;
  price: number;
}

const FoodCard: React.FC<FoodCardProps> = ({ image, name, price }) => {
  const [rating, setRating] = useState<number>(0); // State for the rating (0-5 stars)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  // Handle click on stars to set rating
  const handleStarClick = (index: number) => {
    setRating(index + 1); // Rating is 1-based, so we add 1 to index
  };

  return (
    <div className='relative w-48 h-64 sm:w-56 sm:h-72 xs:w-64 xs:h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300'>
      {/* Food Image */}
      <img
        src={image}
        alt={name}
        className='w-full h-full object-cover hover:brightness-75 transition-all duration-300'
      />

      {/* Overlay with Name & Price */}
      <div className='absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center p-2 sm:p-3'>
        <h3 className='text-md sm:text-lg font-bold'>{name}</h3>
        <p className='text-sm sm:text-base'>${price.toFixed(2)}</p>

        {/* Star Rating System */}
        <div className='flex justify-center items-center'>
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              onClick={() => handleStarClick(index)} // Update rating when a star is clicked
              className='cursor-pointer'
            >
              {rating > index ? (
                <FaStar className='text-yellow-500' />
              ) : (
                <FaRegStar className='text-yellow-500' />
              )}
            </div>
          ))}
        </div>

        {/* Order Now Button */}
        <button
          onClick={openModal}
          className='mt-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-1 px-4 rounded-lg transition-all duration-300'
        >
          Order Now
        </button>
        <OrderModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
};

export default FoodCard;
