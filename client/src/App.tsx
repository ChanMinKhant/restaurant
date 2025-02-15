// import './App.css'

import { Route, Routes } from 'react-router-dom';
import Menu from './pages/Home/Menu';
import Navbar from './components/NavBar';
import { useEffect, useState } from 'react';
import ProtectedRoute from './pages/ProtectedRoute';
import './App.css';
import Home from './pages/RealHome/Home';
import Orders from './pages/Orders/Orders';
import Dashboard from './pages/Dashboard/Dashboard';
import AddItem from './pages/Dashboard/components/AddItem';
import Portfolio from './pages/Dashboard/components/Portfolio';
import DashboardHome from './pages/Dashboard/components/DashboardHome';
import MenuList from './pages/Dashboard/components/MenuList';
import ManageUsers from './pages/Dashboard/components/ManageUsers';
import AddUser from './pages/Dashboard/components/AddUser';
import Cart from './pages/Cart/Cart';
import TableOrders from './pages/Orders/components/TableOrders';
import ProfilePage from './pages/Profile/Profile';
import Cookies from 'js-cookie';
function App() {
  const [userType, SetUserType] = useState<string>('customer');
  useEffect(() => {
    const allCookies = Cookies.get();
    // const userTypeFromCookie = allCookies['userType'];
    console.log(allCookies);
  }, []);

  return (
    <div className='w-screen h-screen bg-white scrollbar-hidden'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/menu' element={<Menu />}></Route>
        <Route path='/orders' element={<Orders />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/table-orders' element={<TableOrders />}></Route>
        <Route path='/profile' element={<ProfilePage />}></Route>
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path='add-items/:id' element={<AddItem />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='menu' element={<MenuList />} />
          <Route path='manage-users' element={<ManageUsers />} />
          <Route path='add-users/:id' element={<AddUser />} />
        </Route>
        <Route path='/unauthorized' element={<ProtectedRoute />}></Route>
      </Routes>
    </div>
  );
}

export default App;
