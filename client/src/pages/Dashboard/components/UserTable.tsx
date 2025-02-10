// import { FaRegEdit } from 'react-icons/fa';
// import { RiDeleteBin6Line } from 'react-icons/ri';

// interface User {
//   id: number;
//   name: string;
//   address: string;
//   email: string;
//   phone: string;
//   role: string;
// }

// interface UserTableProps {
//   users: User[];
//   deleteUser: (id: number) => void;
// }

// const UserTable: React.FC<UserTableProps> = ({ users, deleteUser }) => {
//   return (
//     <table className='min-w-full table-auto border-collapse border border-gray-300'>
//       <thead>
//         <tr>
//           <th className='border-b px-4 py-2 text-left'>Name</th>
//           <th className='border-b px-4 py-2 text-left'>Address</th>
//           <th className='border-b px-4 py-2 text-left'>Email</th>
//           <th className='border-b px-4 py-2 text-left'>Phone</th>
//           <th className='border-b px-4 py-2 text-left'>Role</th>
//           <th className='border-b px-4 py-2'>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {users.map((user) => (
//           <tr key={user.id}>
//             <td className='border-b px-4 py-2'>{user.name}</td>
//             <td className='border-b px-4 py-2'>{user.address}</td>
//             <td className='border-b px-4 py-2'>{user.email}</td>
//             <td className='border-b px-4 py-2'>{user.phone}</td>
//             <td className='border-b px-4 py-2'>{user.role}</td>
//             <td className='flex gap-4 justify-center items-center'>
//               <RiDeleteBin6Line
//                 className='text-red-500 hover:text-red-700 cursor-pointer mt-1'
//                 onClick={() => deleteUser(user.id)}
//               />
//               <FaRegEdit className='text-blue-500 hover:text-blue-700 cursor-pointer mt-1' />
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default UserTable;
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';

interface User {
  id: number;
  name: string;
  address: string;
  email: string;
  phone: string;
  role: string;
}

interface UserTableProps {
  users: User[];
  deleteUser: (id: number) => void;
}

const UserTable: React.FC<UserTableProps> = ({ users, deleteUser }) => {
  return (
    <table className='min-w-full table-auto border-collapse border border-gray-300'>
      <thead>
        <tr>
          <th className='border-b px-4 py-2 text-left'>Name</th>
          <th className='border-b px-4 py-2 text-left'>Address</th>
          <th className='border-b px-4 py-2 text-left'>Email</th>
          <th className='border-b px-4 py-2 text-left'>Phone</th>
          <th className='border-b px-4 py-2 text-left'>Role</th>
          <th className='border-b px-4 py-2'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td className='border-b px-4 py-2'>{user.name}</td>
            <td className='border-b px-4 py-2'>{user.address}</td>
            <td className='border-b px-4 py-2'>{user.email}</td>
            <td className='border-b px-4 py-2'>{user.phone}</td>
            <td className='border-b px-4 py-2'>{user.role}</td>
            <td className='flex gap-4 justify-center items-center'>
              <RiDeleteBin6Line
                className='text-red-500 hover:text-red-700 cursor-pointer mt-1'
                onClick={() => deleteUser(user.id)}
              />
              <FaRegEdit className='text-blue-500 hover:text-blue-700 cursor-pointer mt-1' />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
