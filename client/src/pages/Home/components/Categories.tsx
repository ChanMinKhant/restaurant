import { useRef, useState, useEffect } from 'react';
import {
  FaPizzaSlice,
  FaHamburger,
  FaIceCream,
  FaCoffee,
  FaLeaf,
  FaPepperHot,
} from 'react-icons/fa';
import { MdOutlineRamenDining } from 'react-icons/md';
import './cate.css';
function Categories() {
  const categoriesRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = () => {
    if (categoriesRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = categoriesRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (categoriesRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      categoriesRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    handleScroll();
    if (categoriesRef.current) {
      categoriesRef.current.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (categoriesRef.current) {
        categoriesRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className='relative w-screen mb-3 z-50 scrollbar-hidden'>
      {/* Left Arrow Button */}
      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          className='absolute left-[10px] top-1/2 transform -translate-y-1/2 z-10 bg-gray-300 p-2 rounded-full'
        >
          &lt;
        </button>
      )}

      {/* Categories Scroll Container */}
      <div
        ref={categoriesRef}
        className='w-full mb-3 flex items-center overflow-x-auto py-3 px-5 bg-white border-b border-gray-300 sm:justify-center scrollbar-hidden'
      >
        {[
          { name: 'Drinks', icon: <FaCoffee /> },
          { name: 'Spicy', icon: <FaPepperHot /> },
          { name: 'Desserts', icon: <FaIceCream /> },
          { name: 'Indian', icon: <MdOutlineRamenDining /> },
          { name: 'Italian', icon: <FaPizzaSlice /> },
          { name: 'Chinese', icon: <MdOutlineRamenDining /> },
          { name: 'Japanese', icon: <FaLeaf /> },
          { name: 'Pizza', icon: <FaPizzaSlice /> },
          { name: 'Burger', icon: <FaHamburger /> },
        ].map((category, index) => (
          <button
            key={index}
            className='flex items-center gap-2 whitespace-nowrap mx-2 sm:mx-4 bg-transparent hover:bg-blue-500 text-gray-700 font-semibold hover:text-white py-1 px-3 sm:py-2 sm:px-4 text-sm sm:text-base border border-gray-500 hover:border-transparent rounded transition-all duration-300'
          >
            {category.icon} {category.name}
          </button>
        ))}
      </div>

      {/* Right Arrow Button */}
      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          className='absolute right-[10px] top-1/2 transform -translate-y-1/2 z-10 bg-gray-300 p-2 rounded-full'
        >
          &gt;
        </button>
      )}
    </div>
  );
}

export default Categories;
