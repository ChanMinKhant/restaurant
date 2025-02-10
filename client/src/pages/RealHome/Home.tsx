import React from 'react';
import { Link } from 'react-router-dom'; // For linking to the menu page

const Home: React.FC = () => {
  return (
    <div className='relative h-screen flex flex-col md:flex-row'>
      {/* Left half: Background image */}
      <div
        className='md:w-1/2 w-full h-full bg-cover bg-center'
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        {/* The background will cover the left half */}
      </div>

      {/* Right half: Content */}
      <div className='md:w-1/2 w-full flex flex-col justify-center items-center bg-white p-8'>
        {/* Title and Description */}
        <h1 className='text-4xl font-bold text-gray-800 mb-4'>
          Welcome to Our Restaurant!
        </h1>
        <p className='text-lg text-gray-600 mb-8 text-center'>
          Discover delicious meals, freshly prepared for you. Explore our menu
          and get started with us.
        </p>

        {/* Buttons */}
        <div className='flex gap-4'>
          {/* Sign Up Button */}
          <Link
            to='/signup'
            className='bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-all'
          >
            Sign Up
          </Link>

          {/* Explore Menu Button */}
          <Link
            to='/menu'
            className='bg-green-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition-all'
          >
            Explore Menu
          </Link>
        </div>
      </div>

      {/* <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2'>
        <p className='text-white text-xl'>Scroll down</p>
        <div className='animate-bounce text-white text-3xl'>↓</div>
      </div> */}
    </div>
  );
};

export default Home;
