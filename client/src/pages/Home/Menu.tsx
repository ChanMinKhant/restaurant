import { useEffect, useState } from 'react';
import foodData from '../../data/food.json';

import SearchBar from '../../components/SearchBar';
import Categories from './components/Categories';
import FoodCard from './components/FoodCard';

interface Food {
  id: number;
  name: string;
  image: string;
  price: number;
  categories: string[];
}

function Menu() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    setFoods(foodData);
  }, []);

  // Filter foods based on search query
  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className='flex flex-col w-full'>
      <div className=' sticky  md:top-[55px] top-[44px]  mb-5  z-10 bg-white'>
        <Categories />
      </div>

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Food Cards */}
      <div className='flex justify-center items-center flex-wrap gap-4 p-4 w-full'>
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food) => (
            <FoodCard
              key={food.id}
              image={food.image}
              name={food.name}
              price={food.price}
            />
          ))
        ) : (
          <p className='text-gray-500'>No food items match your search.</p>
        )}
      </div>
    </div>
  );
}

export default Menu;
