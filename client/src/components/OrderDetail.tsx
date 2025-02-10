interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderDetail: React.FC<OrderModalProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className='fixed  text-black w-[100vw] gap-4 flex flex-col inset-0 bg-opacity-50 justify-center items-center z-50'>
          <div className='bg-white p-6 rounded-lg shadow-lg w-96'>
            <div className='flex justify-between items-center'>
              <div className='w-[100px] font-thin'>Order:</div>
              <div className='font-medium w-[200px]'>Yato Sushi</div>
            </div>
            <div className='flex justify-between items-center'>
              <div className='w-[100px] font-thin'> Order Type:</div>
              <div className='font-medium w-[200px]'>TakeAway</div>
            </div>
            <div className='flex justify-between items-center'>
              <div className='w-[100px] font-thin'>To:</div>
              <div className='font-medium w-[200px]'>Table 3</div>
            </div>
            <div className='flex justify-between items-center'>
              <div className='w-[100px] font-thin'>Phone no:</div>
              <div className='font-medium w-[200px]'></div>
            </div>

            <button
              onClick={onClose}
              className='bg-gray-300 text-black py-2 px-4 rounded-lg hover:bg-gray-400'
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderDetail;
