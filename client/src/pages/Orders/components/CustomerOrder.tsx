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
    </div>
  );
}

export default CustomerOrder;
