import { Switch } from '@headlessui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaEdit } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { toggleDarkMode } from '../../store/features/darkModeSlice';
import { useState } from 'react';
const ProfilePage = () => {
  // Load dark mode preference from localStorage
  const dispatch = useDispatch();
  const darkMode = useSelector((state: RootState) => state.darkMode.darkMode);

  const [user, setUser] = useState({
    name: 'John Doe',
    address: '123 Main St, New York, USA',
    phone: '+1 234 567 890',
    email: 'johndoe@example.com',
    userType: 'Customer',
    profileImage: '/pasta.jpg',
  });
  const mode = darkMode
    ? 'bg-gray-900 text-white'
    : 'bg-gray-100 text-gray-900';

  return (
    <div
      className={`${mode} min-h-screen flex justify-center items-center p-6 mt-10`}
    >
      <div
        className={`max-w-lg w-full shadow-lg rounded-lg p-6 relative ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        }`}
      >
        {/* Dark Mode Toggle */}
        <div className='absolute top-4 right-4'>
          <Switch
            checked={darkMode}
            onChange={() => dispatch(toggleDarkMode())}
            className={`${
              darkMode ? 'bg-gray-500' : 'bg-gray-200'
            }  relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className='sr-only'>Enable Dark Mode</span>
            <span
              className={`${
                darkMode
                  ? 'translate-x-6 bg-gray-900'
                  : 'translate-x-1 bg-white'
              } inline-block h-4 w-4 transform  rounded-full transition`}
            />
          </Switch>
        </div>

        {/* Profile Image */}
        <div className='flex flex-col items-center'>
          <img
            src={user.profileImage}
            alt='Profile'
            className='w-24 h-24 rounded-full shadow-md border-2 border-gray-300'
          />
          <h2 className='mt-4 text-xl font-bold'>{user.name}</h2>
          <p className='text-gray-500'>{user.userType}</p>
        </div>

        {/* User Info */}
        <div className='mt-6 space-y-3'>
          <div className='flex justify-between items-center border-b pb-2'>
            <span className='font-semibold'>Address:</span>
            <span className='text-gray-600'>{user.address}</span>
          </div>
          <div className='flex justify-between items-center border-b pb-2'>
            <span className='font-semibold'>Phone:</span>
            <span className='text-gray-600'>{user.phone}</span>
          </div>
          <div className='flex justify-between items-center border-b pb-2'>
            <span className='font-semibold'>Email:</span>
            <span className='text-gray-600'>{user.email}</span>
          </div>
          <div className='flex justify-between items-center border-b pb-2'>
            <span className='font-semibold'>User Type:</span>
            <span className='text-gray-600'>{user.userType}</span>
          </div>
        </div>

        {/* Social Media Links */}
        <div className='mt-6 flex justify-center space-x-4 text-gray-600'>
          <FaFacebook className='text-blue-500 text-xl cursor-pointer hover:text-blue-700' />
          <FaTwitter className='text-blue-400 text-xl cursor-pointer hover:text-blue-600' />
          <FaInstagram className='text-pink-500 text-xl cursor-pointer hover:text-pink-700' />
        </div>

        {/* Edit Profile Button */}
        <div className='mt-6 text-center'>
          <button className='flex items-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md'>
            <FaEdit className='mr-2' /> Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
