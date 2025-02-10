import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const foodItems = [
  { id: 1, name: 'Delicious Noodles', image: '/steak.jpg' },
  { id: 2, name: 'Tasty Burger', image: '/fb.jpg' },
  { id: 3, name: 'Spicy Pizza', image: '/ice.jpg' },
];

const FoodSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % foodItems.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='relative w-full h-[200px] overflow-hidden rounded-lg mb-4'>
      <AnimatePresence mode='wait'>
        <motion.div
          key={foodItems[currentIndex].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className='absolute inset-0'
        >
          <img
            src={foodItems[currentIndex].image}
            alt={foodItems[currentIndex].name}
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center p-4'>
            <h2 className='text-3xl md:text-4xl font-bold'>
              {foodItems[currentIndex].name}
            </h2>
            <Link
              to='/menu'
              className='mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-lg transition'
            >
              Check Menu now
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default FoodSlider;
