import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

interface QuantitySelectorProps {
  min?: number;
  max?: number;
  value?: number;
  onChange: (value: number) => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  min = 1,
  max = 10,
  value = 1,
  onChange,
}) => {
  const [quantity, setQuantity] = useState(value);

  const handleIncrement = () => {
    if (quantity < max) {
      const newValue = quantity + 1;
      setQuantity(newValue);
      onChange(newValue);
    }
  };

  const handleDecrement = () => {
    if (quantity > min) {
      const newValue = quantity - 1;
      setQuantity(newValue);
      onChange(newValue);
    }
  };

  return (
    <div className='flex items-center space-x-2'>
      <button
        onClick={handleDecrement}
        disabled={quantity <= min}
        className={`p-2 rounded-full ${
          quantity > min
            ? 'bg-gray-300 hover:bg-gray-400'
            : 'bg-gray-200 cursor-not-allowed'
        } transition-all duration-200`}
      >
        <FaMinus size={10} className='text-gray-700' />
      </button>

      <span className='text-lg font-semibold px-4'>{quantity}</span>

      <button
        onClick={handleIncrement}
        disabled={quantity >= max}
        className={`p-2 rounded-full ${
          quantity < max
            ? 'bg-gray-300 hover:bg-gray-400'
            : 'bg-gray-200 cursor-not-allowed'
        } transition-all duration-200`}
      >
        <FaPlus size={10} className='text-gray-700' />
      </button>
    </div>
  );
};

export default QuantitySelector;
