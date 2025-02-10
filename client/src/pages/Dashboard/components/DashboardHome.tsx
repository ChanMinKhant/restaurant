// import EachCustOrder from '../../Orders/components/EachCustOrder';
import ActiveOrders from '../../../components/ActiveOrders';
import DashCatagories from './DashCatagories';
// import orderData from '../../../data/orders.json';
function DashboardHome() {
  return (
    <div className='flex flex-col gap-4'>
      {/* <div className='overflow-scroll max-h-full'> */}
      <DashCatagories />
      <h1 className='text-2xl font-semibold text-gray-800 border-b-4 border-blue-500 pb-2'>
        📦 Active Orders
      </h1>
      <ActiveOrders />
      <ActiveOrders />
      <ActiveOrders />
      <ActiveOrders />
      <ActiveOrders />
      <ActiveOrders />
      <ActiveOrders />
      {/* </div> */}
    </div>
  );
}

export default DashboardHome;
