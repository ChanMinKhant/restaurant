import { useState } from 'react';
import CustomerOrder from './components/CustomerOrder';
import ChefOrder from './components/ChefOrder';
import WaiterOrder from './components/WaiterOrder';
import AdminOrder from './components/AdminOrder';

function Orders() {
  const [userType, setUserType] = useState<string>('customer');

  return (
    <div className='flex flex-col items-center w-full mt-16'>
      {/* User Type Selector for Testing */}
      {/* <div className='flex gap-2 mb-4'>
        {['customer', 'chef', 'waiter', 'admin'].map((type) => (
          <button
            key={type}
            className={`px-4 py-2 rounded-md ${
              userType === type ? 'bg-blue-600 text-white' : 'bg-gray-300'
            }`}
            onClick={() => setUserType(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div> */}

      {/* Render Different Components Based on User Type */}
      {userType === 'customer' && <CustomerOrder />}
      {userType === 'chef' && <ChefOrder />}
      {userType === 'waiter' && <WaiterOrder />}
      {userType === 'admin' && <AdminOrder />}
    </div>
  );
}

export default Orders;
