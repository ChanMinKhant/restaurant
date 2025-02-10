// import { useState } from 'react';
// import UserTable from './UserTable';

// // import AddUserModal from "./AddUserModal";

// const ManageUsers = () => {
//   const [users, setUsers] = useState([
//     {
//       id: 1,
//       name: 'Alice Johnson',
//       email: 'alice@example.com',
//       role: 'Admin',
//       Phone: '09786420552',
//     },
//     {
//       id: 2,
//       name: 'Bob Smith',
//       email: 'bob@example.com',
//       role: 'Chef',
//       Phone: '09787878787',
//     },
//     {
//       id: 3,
//       name: 'Charlie Davis',
//       email: 'charlie@example.com',
//       role: 'Waiter',
//       Phone: '09747547647',
//     },
//   ]);

//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const addUser = (newUser: any) => {
//     setUsers([...users, { id: users.length + 1, ...newUser }]);
//     setIsModalOpen(false);
//   };

//   const deleteUser = (id: any) => {
//     setUsers(users.filter((user) => user.id !== id));
//   };

//   return (
//     <div className='p-6 max-w-4xl mx-auto'>
//       <h1 className='text-2xl font-bold mb-4 text-gray-800'>Manage Users</h1>
//       <button
//         className='mb-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg'
//         onClick={() => setIsModalOpen(true)}
//       >
//         + Add User
//       </button>
//        <UserTable users={users} deleteUser={deleteUser} />
//       {/* {isModalOpen && <AddUserModal addUser={addUser} closeModal={() => setIsModalOpen(false)} />} */} */}
//     </div>
//   );
// };

// export default ManageUsers;
import { useState } from 'react';
import UserTable from './UserTable';
import { Link } from 'react-router-dom';

const ManageUsers = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Alice Johnson',
      address: '123 Main St',
      email: 'alice@example.com',
      phone: '09786420552',
      role: 'Admin',
    },
    {
      id: 2,
      name: 'Bob Smith',
      address: '456 Oak Ave',
      email: 'bob@example.com',
      phone: '09787878787',
      role: 'Chef',
    },
    {
      id: 3,
      name: 'Charlie Davis',
      address: '789 Pine Rd',
      email: 'charlie@example.com',
      phone: '09747547647',
      role: 'Waiter',
    },
  ]);

  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const addUser = (newUser: any) => {
  //   setUsers([...users, { id: users.length + 1, ...newUser }]);
  //   setIsModalOpen(false);
  // };

  const deleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className='p-6 max-w-4xl mx-auto mt-10'>
      <h1 className='text-2xl font-bold mb-4 text-gray-800'>Manage Users</h1>
      <Link
        to='/dashboard/add-users/addUser'
        className='mb-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg'
        // onClick={() => setIsModalOpen(true)}
      >
        + Add User
      </Link>
      <UserTable users={users} deleteUser={deleteUser} />
      {/* {isModalOpen && <AddUserModal addUser={addUser} closeModal={() => setIsModalOpen(false)} />} */}
    </div>
  );
};

export default ManageUsers;
