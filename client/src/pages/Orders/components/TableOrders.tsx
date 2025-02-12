import { useState } from 'react';
import { useSelector } from 'react-redux';
import EachCustOrder from './EachCustOrder';
import { RootState } from '../../../store/store';

const TableOrders: React.FC = () => {
  const tables = useSelector((state: RootState) => state.table.tables);
  const [filterStatus, setFilterStatus] = useState<string>('All');

  // Function to filter tables based on selected status
  const filteredTables = tables.filter((table) =>
    filterStatus === 'All' ? true : table.status === filterStatus,
  );

  return (
    <div className='container mx-auto px-4 py-6'>
      <h1 className='text-2xl font-bold mb-4'>Orders by Table</h1>

      {/* Filter Dropdown */}
      <div className='flex justify-end mb-4'>
        <label className='mr-2 font-medium text-gray-700'>
          Filter by Status:
        </label>
        <select
          className='border p-2 rounded-md'
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
        >
          <option value='All'>All</option>
          <option value='Pending'>Pending</option>
          <option value='Preparing'>Preparing</option>
          <option value='Ready'>Ready</option>
          <option value='Delivered'>Delivered</option>
        </select>
      </div>

      {filteredTables.length === 0 ? (
        <p className='text-center text-gray-500'>
          No orders match the selected filter.
        </p>
      ) : (
        filteredTables.map((table) => (
          <div
            key={table.tableNo}
            className='mb-6 border p-4 rounded-md shadow-lg bg-white'
          >
            {/* Table Header */}
            <div className='flex justify-between items-center border-b pb-2 mb-3'>
              <h2 className='text-xl font-semibold'>Table #{table.tableNo}</h2>
              <p className='text-gray-600'>Customer: {table.customerName}</p>
            </div>

            {/* Order Items */}
            <div className='flex flex-col gap-4'>
              {table.items.map((item: any, index: number) => (
                <EachCustOrder
                  key={index}
                  id={index}
                  foodName={item.foodName}
                  image={item.image}
                  price={item.price}
                  estimatedTime={table.estimatedTime}
                  status={table.status}
                />
              ))}
            </div>

            {/* Total Price */}
            <div className='mt-4 text-right font-semibold text-lg'>
              Total: ${table.totalPrice.toFixed(2)}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TableOrders;
