// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './nav.css';

// const NavBar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [userType, SetUserType] = useState<string>('customer');

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className='fixed top-0 z-[50] w-full'>
//       <nav className='flex justify-between items-center bg-[#f1f5f8] px-4 py-2  text-black shadow-md'>
//         {/* Logo */}
//         {/* bg-gradient-to-r from-[#6a11cb] to-[#2575fc] */}
//         <Link to={'/'} className='text-lg font-semibold'>
//           <span className='italic'>Paradise</span>
//         </Link>

//         {/* Desktop Navigation (Visible on md and above) */}
//         <div className='hidden md:flex gap-6'>
//           <Link
//             className='hover:text-white hover:font-bold hover:bg-blue-300 px-3 py-2 rounded-lg transition'
//             to={'/'}
//           >
//             Home
//           </Link>
//           <Link
//             className='hover:text-white hover:font-bold hover:bg-blue-300 px-3 py-2 rounded-lg transition'
//             to={'/menu'}
//           >
//             Menu
//           </Link>
//           <Link
//             className='hover:text-white hover:font-bold hover:bg-blue-300 px-3 py-2 rounded-lg transition'
//             to={'/orders'}
//           >
//             Orders
//           </Link>
//           <Link
//             className='hover:text-white hover:font-bold hover:bg-blue-300 px-3 py-2 rounded-lg transition'
//             to={'/orders'}
//           >
//             Order History
//           </Link>
//           <Link
//             className='hover:text-white hover:font-bold hover:bg-blue-300 px-3 py-2 rounded-lg transition'
//             to={'/services'}
//           >
//             Services
//           </Link>
//         </div>

//         {/* Mobile Menu Button (Visible only on sm and below) */}
//         <button
//           onClick={toggleMenu}
//           className='focus:outline-none text-white md:hidden'
//         >
//           {isMenuOpen ? (
//             <svg
//               xmlns='http://www.w3.org/2000/svg'
//               className='w-6 h-6'
//               fill='none'
//               stroke='black'
//               viewBox='0 0 24 24'
//               strokeWidth='2'
//             >
//               <path
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//                 d='M6 18L18 6M6 6l12 12'
//               />
//             </svg>
//           ) : (
//             <svg
//               xmlns='http://www.w3.org/2000/svg'
//               className='w-6 h-6'
//               fill='none'
//               stroke='black'
//               viewBox='0 0 24 24'
//               strokeWidth='2'
//             >
//               <path
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//                 d='M4 6h16M4 12h16M4 18h16'
//               />
//             </svg>
//           )}
//         </button>
//       </nav>

//       {/* Mobile Dropdown Menu */}
//       <div
//         className={`flex flex-col bg-white/20 backdrop-blur-sm hover:bg-white/40 fixed px-2 top-[50px] shadow-lg transition-transform transform md:hidden ${
//           isMenuOpen
//             ? 'translate-y-0 opacity-100 w-full'
//             : '-translate-y-full opacity-0'
//         }`}
//         style={{ transition: 'all 0.3s ease-in-out' }}
//       >
//         <Link
//           className='text-md hover:bg-blue-300 px-3 py-2 border-b border-gray-300'
//           to={'/'}
//           onClick={toggleMenu}
//         >
//           Home
//         </Link>
//         <Link
//           className='text-md hover:bg-blue-300 px-3 py-2 border-b border-gray-300'
//           to={'/menu'}
//           onClick={toggleMenu}
//         >
//           Menu
//         </Link>
//         <Link
//           className='text-md hover:bg-blue-300 px-3 py-2 border-b border-gray-300'
//           to={'/orders'}
//           onClick={toggleMenu}
//         >
//           Orders
//         </Link>
//         <Link
//           className='hover:text-white hover:font-bold hover:bg-blue-300 px-3 py-2 rounded-lg transition'
//           to={'/orders'}
//         >
//           Order History
//         </Link>
//         <Link
//           className='text-md hover:bg-blue-300 px-3 py-2 border-b border-gray-300'
//           to={'/services'}
//           onClick={toggleMenu}
//         >
//           Services
//         </Link>
//         {!userType == 'customer' && (
//           <Link
//             className='text-md hover:bg-blue-300 px-3 py-2 border-b border-gray-300'
//             to={'/services'}
//             onClick={toggleMenu}
//           >
//             Dashboard
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NavBar;
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  Menu,
  ClipboardList,
  History,
  ConciergeBell,
  User,
  LayoutDashboard,
} from 'lucide-react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userType, setUserType] = useState<string>('admin');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='fixed top-0 z-[50] w-full'>
      <nav className='flex justify-between items-center bg-[#f1f5f8] px-4 py-2 text-black shadow-md'>
        {/* Logo */}
        <Link to='/' className='text-lg font-semibold italic'>
          Paradise
        </Link>

        {/* Desktop Navigation */}
        <div className='hidden md:flex gap-6 items-center'>
          <Link
            className='flex items-center gap-2 hover:bg-blue-300 px-3 py-2 rounded-lg transition'
            to='/'
          >
            <Home size={20} /> Home
          </Link>
          <Link
            className='flex items-center gap-2 hover:bg-blue-300 px-3 py-2 rounded-lg transition'
            to='/menu'
          >
            <Menu size={20} /> Menu
          </Link>
          <Link
            className='flex items-center gap-2 hover:bg-blue-300 px-3 py-2 rounded-lg transition'
            to='/orders'
          >
            <ClipboardList size={20} /> Orders
          </Link>
          <Link
            className='flex items-center gap-2 hover:bg-blue-300 px-3 py-2 rounded-lg transition'
            to='/history'
          >
            <History size={20} /> Order History
          </Link>
          {userType == 'admin' && (
            <Link
              className='flex items-center gap-2 hover:bg-blue-300 px-3 py-2 rounded-lg transition'
              to='/dashboard'
            >
              <LayoutDashboard size={20} className='text-gray-700' />
              Dashboard
            </Link>
          )}
          <Link
            className='flex items-center gap-2 hover:bg-blue-300 px-3 py-2 rounded-lg transition'
            to='/services'
          >
            <ConciergeBell size={20} /> Services
          </Link>
        </div>

        {/* User Profile Icon */}
        <div className='hidden md:flex items-center'>
          <User size={24} className='cursor-pointer hover:text-blue-500' />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className='md:hidden z-300 focus:outline-none'
        >
          {isMenuOpen ? (
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='black'
              viewBox='0 0 24 24'
              strokeWidth='2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='black'
              viewBox='0 0 24 24'
              strokeWidth='2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed top-[50px] left-0 w-full bg-white/90 backdrop-blur-sm shadow-lg transition-transform transform md:hidden ${
          isMenuOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0'
        }`}
        style={{ transition: 'all 0.3s ease-in-out' }}
      >
        <Link
          className='flex items-center gap-2 text-md px-3 py-2 border-b'
          to='/'
          onClick={toggleMenu}
        >
          <Home size={20} /> Home
        </Link>
        <Link
          className='flex items-center gap-2 text-md px-3 py-2 border-b'
          to='/menu'
          onClick={toggleMenu}
        >
          <Menu size={20} /> Menu
        </Link>
        <Link
          className='flex items-center gap-2 text-md px-3 py-2 border-b'
          to='/orders'
          onClick={toggleMenu}
        >
          <ClipboardList size={20} /> Orders
        </Link>
        <Link
          className='flex items-center gap-2 text-md px-3 py-2 border-b'
          to='/history'
          onClick={toggleMenu}
        >
          <History size={20} /> Order History
        </Link>
        {userType == 'admin' && (
          <Link
            className='flex items-center gap-2 text-md px-3 py-2 border-b'
            to='/dashboard'
            onClick={toggleMenu}
          >
            <LayoutDashboard size={20} className='text-gray-700' />
            Dashboard
          </Link>
        )}
        <Link
          className='flex items-center gap-2 text-md px-3 py-2 border-b'
          to='/services'
          onClick={toggleMenu}
        >
          <ConciergeBell size={20} /> Services
        </Link>

        {/* Profile in Mobile Menu */}
        {/* <div className='flex items-center gap-2 text-md px-3 py-2 border-t'>
          <User size={20} /> Profile
        </div> */}
      </div>
    </div>
  );
};

export default NavBar;
