import { Link } from 'react-router-dom';
import { FiHome, FiPlus, FiBriefcase } from 'react-icons/fi';
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from 'react-icons/md';
import { HiUserAdd } from 'react-icons/hi';

import { useState } from 'react';
import { FaUsersCog } from 'react-icons/fa';
import { MdOutlineMenuBook } from 'react-icons/md';
import './sidebar.css';
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex'>
      {/* Sidebar */}
      <div
        className={`bg-gray-800 mt-[50px]  text-white min-h-screen md:p-4 p-2 transition-all ${
          isOpen ? 'md:w-60 w-16' : 'md:w-16 w-13'
        }`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='text-white mb-6 md:block hidden'
        >
          {isOpen ? (
            <MdOutlineKeyboardDoubleArrowLeft size={24} />
          ) : (
            <MdOutlineKeyboardDoubleArrowRight size={24} />
          )}
        </button>

        <nav className='flex flex-col gap-6 overflow-y-scroll scrollbar-hidden'>
          <Link
            to='/dashboard'
            className='flex items-center gap-3 hover:bg-gray-700 p-2 rounded'
          >
            <FiHome />{' '}
            {isOpen && <div className='md:block hidden'>Dashboard</div>}
          </Link>
          <Link
            to='/dashboard/addItem'
            className='flex items-center gap-3 hover:bg-gray-700 p-2 rounded'
          >
            <FiPlus />{' '}
            {isOpen && <div className='md:block hidden'>Add Item</div>}
          </Link>
          <Link
            to='/dashboard/add-users/addUser'
            className='flex items-center gap-3 hover:bg-gray-700 p-2 rounded'
          >
            <HiUserAdd />{' '}
            {isOpen && <div className='md:block hidden'>Add Item</div>}
          </Link>
          <Link
            to='/dashboard/manage-users'
            className='flex items-center gap-3 hover:bg-gray-700 p-2 rounded'
          >
            <FaUsersCog />{' '}
            {isOpen && <div className='md:block hidden'>Manage Users</div>}
          </Link>
          <Link
            to='/dashboard/portfolio'
            className='flex items-center gap-3 hover:bg-gray-700 p-2 rounded'
          >
            <FiBriefcase />{' '}
            {isOpen && <div className='md:block hidden'>Portfolio</div>}
          </Link>
          <Link
            to='/dashboard/menu'
            className='flex items-center gap-3 hover:bg-gray-700 p-2 rounded'
          >
            <MdOutlineMenuBook />{' '}
            {isOpen && <div className='md:block hidden'>Menu List</div>}
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
