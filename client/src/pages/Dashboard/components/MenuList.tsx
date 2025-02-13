import { useEffect, useState } from 'react';
import SearchBar from '../../../components/SearchBar';
import MenuItem from './MenuItem';
import foodData from '../../../data/food.json';
import { Link } from 'react-router-dom';

// Define Food interface outside the component for reuse
interface Food {
  id: number;
  name: string;
  image: string;
  price: number;
  categories: string[];
}

function MenuList() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Load food data from the imported JSON file
  useEffect(() => {
    setFoods(foodData); // Ensure that foodData matches the Food[] type
  }, []);

  // Filter foods based on search query
  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className='flex flex-col mt-15'>
      <div className='text-2xl font-semibold text-gray-800 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg shadow-md'>
        🍽️ Menu List
      </div>
      <div className='flex justify-between flex-wrap items-center mb-4'>
        <div className='w-md flex justify-between items-center'>
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
        <Link
          to={'/dashboard/add-items/new'}
          className='bg-blue-500 mt-10 md:mr-15 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Add Items
        </Link>
      </div>
      {filteredFoods.length > 0 ? (
        filteredFoods.map((food) => <MenuItem key={food.id} food={food} />)
      ) : (
        <p>No matching results found.</p>
      )}
    </div>
  );
}

export default MenuList;
