import EachCustOrder from './EachCustOrder';

function CustomerOrder() {
  return (
    // Customer's Order Tracking
    <div className='flex flex-col px-5 items-center w-full mt-16'>
      <EachCustOrder
        id={1}
        foodName='Pizza Margherita'
        image='pizza.jpg'
        price={15.0}
        estimatedTime='20 min'
        status='Pending'
      />
      <EachCustOrder
        id={2}
        foodName='Burger'
        image='burger.jpg'
        price={12.0}
        estimatedTime='30 min'
        status='Preparing'
      />
      {/*<h2>Order History</h2>
       <div className='order-card'>
        <p>Order ID: #1234</p>
        <p>
          Status: <span className='status-in-progress'>In Progress</span>
        </p>
        <div className='order-details'>
          <img src='food-item.jpg' alt='Food Item' />
          <p>Pizza Margherita - 1x</p>
          <p>Price: $15.00</p>
        </div>
        <div className='progress-bar'>
          <div className='progress' style={{ width: '50%' }}></div>
        </div>
        <button className='order-track-btn'>Track Order</button>
      </div> */}
    </div>
  );
}

export default CustomerOrder;
