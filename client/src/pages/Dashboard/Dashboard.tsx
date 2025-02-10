import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import SearchBar from '../../components/SearchBar';
import foodData from '../../data/food.json';
import { useEffect, useState } from 'react';
interface Food {
  id: number;
  name: string;
  image: string;
  price: number;
  categories: string[];
}
const Dashboard = () => {
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
    <div className='flex'>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className='flex-1 p-6 max-h-screen overflow-y-scroll scrollbar-hidden'>
        {/* <div className='w-md flex justify-start items-center'>
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div> */}
        <Outlet /> {/* This is where nested routes will be rendered */}
      </div>
    </div>
  );
};

export default Dashboard;
