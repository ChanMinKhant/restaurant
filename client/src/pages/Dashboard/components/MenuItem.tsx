import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaRegEdit } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';

interface MenuItemProps {
  food: {
    id: number;
    name: string;
    image: string;
    price: number;
    categories: string[];
  };
  // deleteItem: (id: number) => void;
}

function MenuItem({ food }: MenuItemProps) {
  // function MenuItem({ food,deleteItem}: MenuItemProps) {
  return (
    <div className='flex justify-between items-center border-b-2 border-gray-300 p-4'>
      {/* Display food name and price */}
      <div>
        <h4 className='font-semibold'>{food.name}</h4>
        <p className='text-gray-500'>${food.price}</p>
      </div>

      {/* Actions for Edit, Delete, More options */}
      <div className='flex w-1/4 justify-between items-center'>
        <div className='hover:bg-gray-200 p-2 rounded-full'>
          <BsThreeDotsVertical className='text-gray-500 hover:text-gray-700 cursor-pointer' />
        </div>
        {/* Delete button */}
        <RiDeleteBin6Line
          className='text-red-500 hover:text-red-700 cursor-pointer mt-1'
          // onClick={() => deleteItem(food.id)}
        />
        {/* Edit button */}
        <FaRegEdit className='text-blue-500 hover:text-blue-700 cursor-pointer mt-1' />
      </div>
    </div>
  );
}

export default MenuItem;
