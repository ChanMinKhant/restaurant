import { Link } from 'react-router-dom';
import { PlusCircle, Users, Utensils } from 'lucide-react';
import { HiUserAdd } from 'react-icons/hi';

const categories = [
  {
    name: 'Add Items',
    path: '/dashboard/add-items/new',
    icon: <PlusCircle />,
    color: '#007bff',
  },
  {
    name: 'Manage Users',
    path: '/dashboard/manage-users',
    icon: <Users />,
    color: '#28a745',
  },
  {
    name: 'Add Users',
    path: '/dashboard/add-users/new',
    icon: <HiUserAdd />,
    color: '#ffc107',
  },
  // {
  //   name: 'Portfolio',
  //   path: '/dashboard/portfolio',
  //   icon: <Briefcase />,
  //   color: '#ffc107',
  // },
  {
    name: 'Menu',
    path: '/dashboard/menu',
    icon: <Utensils />,
    color: '#dc3545',
  },
];

function DashCategories() {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-15'>
      {categories.map((category, index) => (
        <Link
          key={index}
          to={category.path}
          className='p-6 rounded-xl shadow-lg text-white font-semibold flex flex-col items-center justify-center gap-3 hover:scale-105 transition-transform duration-300'
          style={{ backgroundColor: category.color }}
        >
          {/* bg-gradient-to-r from-blue-500 to-indigo-500 */}
          <div className='text-3xl'>{category.icon}</div>
          <span className='text-lg'>{category.name}</span>
        </Link>
      ))}
    </div>
  );
}

export default DashCategories;
