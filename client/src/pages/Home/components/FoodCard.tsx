// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { FaStar, FaRegStar } from 'react-icons/fa';
// // import OrderModal from "./OrderModal";
// import { addToCart } from '../../../store/features/cartSlice';
// import { MdAddShoppingCart } from 'react-icons/md';
// import QuantitySelector from './QuantitySelector';

// interface FoodCardProps {
//   id: string;
//   image: string;
//   name: string;
//   price: number;
// }

// const FoodCard: React.FC<FoodCardProps> = ({ id, image, name, price }) => {
//   const [rating, setRating] = useState<number>(0);
//   const [quantity, setQuantity] = useState(1);

//   // const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
//   const dispatch = useDispatch();

//   const handleStarClick = (index: number) => {
//     setRating(index + 1);
//   };

//   const handleAddToCart = () => {
//     dispatch(addToCart({ id, name, price, image, quantity }));
//   };

//   return (
//     <div className='relative w-48 h-64 sm:w-56 sm:h-72 xs:w-64 xs:h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300'>
//       <img
//         src={image}
//         alt={name}
//         className='w-full h-full object-cover hover:brightness-75 transition-all duration-300'
//       />
//       <div className='absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center p-2 sm:p-3'>
//         <h3 className='text-md sm:text-lg font-bold'>{name}</h3>
//         <p className='text-sm sm:text-base'>${price.toFixed(2)}</p>

//         <div className='flex justify-center items-center'>
//           {[...Array(5)].map((_, index) => (
//             <div
//               key={index}
//               onClick={() => handleStarClick(index)}
//               className='cursor-pointer'
//             >
//               {rating > index ? (
//                 <FaStar className='text-yellow-500' />
//               ) : (
//                 <FaRegStar className='text-yellow-500' />
//               )}
//             </div>
//           ))}
//         </div>
//         <div className='mt-2  flex justify-between gap-4 px-4 items-center'>
//           <QuantitySelector
//             min={1}
//             max={20}
//             value={quantity}
//             onChange={setQuantity}
//           />
//           <div className=' px-1 pt-1 rounded-full font-bold text-sm transition-all duration-300 shadow-lg transform focus:outline-none bg-white/20 text-[#fccc1c] backdrop-blur-sm hover:bg-white/40 hover:scale-105'>
//             <MdAddShoppingCart
//               size={30}
//               className='hover:text-yellow-600 block'
//               onClick={handleAddToCart}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FoodCard;
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaCheckCircle } from 'react-icons/fa';
import { MdAddShoppingCart } from 'react-icons/md';
import { addToCart } from '../../../store/features/cartSlice';
import QuantitySelector from './QuantitySelector';

interface FoodCardProps {
  id: string;
  image: string;
  name: string;
  price: number;
}

const FoodCard: React.FC<FoodCardProps> = ({ id, image, name, price }) => {
  const [quantity, setQuantity] = useState(1);
  const [clicked, setClicked] = useState(false); // State for button click
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, price, image, quantity }));

    // Set clicked to true
    setClicked(true);

    // Revert back after 2 seconds
    setTimeout(() => {
      setClicked(false);
    }, 2000);
  };

  return (
    <div className='relative w-48 h-64 sm:w-56 sm:h-72 xs:w-64 xs:h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300'>
      <img
        src={image}
        alt={name}
        className='w-full h-full object-cover hover:brightness-75 transition-all duration-300'
      />
      <div className='absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center p-2 sm:p-3'>
        <h3 className='text-md sm:text-lg font-bold'>{name}</h3>
        <p className='text-sm sm:text-base'>${price.toFixed(2)}</p>

        <div className='mt-2 flex justify-between gap-4 px-4 items-center'>
          <QuantitySelector
            min={1}
            max={20}
            value={quantity}
            onChange={setQuantity}
          />

          {/* Add to Cart Button with Dynamic Change */}
          <div
            className='px-2 py-1 rounded-full font-bold text-sm transition-all duration-300 shadow-lg transform focus:outline-none bg-white/20 text-[#fccc1c] backdrop-blur-sm hover:bg-white/40 hover:scale-105'
            onClick={handleAddToCart}
          >
            {clicked ? (
              <FaCheckCircle size={30} className='text-green-500' /> // ✅ Icon after clicking
            ) : (
              <MdAddShoppingCart
                size={30}
                className='hover:text-yellow-600 block'
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
