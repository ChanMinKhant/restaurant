// import { useState } from 'react';

// const statusStages = [
//   { label: 'Pending', color: 'bg-gray-400' },
//   { label: 'Preparing', color: 'bg-yellow-400' },
//   { label: 'Ready', color: 'bg-blue-400' },
//   { label: 'Delivered', color: 'bg-green-400' },
// ];
// interface OrderProgressProps {
//   userType: string;
//   status: 'Pending' | 'Preparing' | 'Ready' | 'Delivered';
// }
// const OrderProgress : React.FC<OrderProgressProps> = ({ userType, status }) => {
//   const [currentStage, setCurrentStage] = useState(0);

//   const handleNextStage = () => {
//     if (currentStage < statusStages.length - 1) {
//       setCurrentStage(currentStage + 1);
//     }
//   };

//   return (
//     <div className='flex  md:flex-row flex-col items-center p-4 w-full'>
//       <div className='flex justify-between w-full max-w-lg relative'>
//         {statusStages.map((stage, index) => (
//           <div key={index} className='flex flex-col items-center'>
//             <div
//               className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
//                 index <= currentStage ? stage.color : 'bg-gray-200'
//               }`}
//             >
//               {index + 1}
//             </div>
//             <span className='text-sm mt-2'>{stage.label}</span>
//           </div>
//         ))}
//         <div className='absolute top-4 left-0 right-0 h-1 bg-gray-300 w-full z-[-1]' />
//         <div
//           className='absolute top-4 left-0 h-1 bg-current transition-all duration-300'
//           style={{
//             width: `${(currentStage / (statusStages.length - 1)) * 100}%`,
//           }}
//         />
//       </div>
//       {userType !== 'customer' && (
//         <button
//           className='mt-4 px-4 py-2 mx-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-300'
//           onClick={handleNextStage}
//           disabled={currentStage === statusStages.length - 1}
//         >
//           Next Stage
//         </button>
//       )}
//     </div>
//   );
// };

// export default OrderProgress;
import { useState, useEffect } from 'react';

const statusStages = [
  { label: 'Pending', color: 'bg-gray-400' },
  { label: 'Preparing', color: 'bg-yellow-400' },
  { label: 'Ready', color: 'bg-blue-400' },
  { label: 'Delivered', color: 'bg-green-400' },
];

interface OrderProgressProps {
  userType: string;
  status: 'Pending' | 'Preparing' | 'Ready' | 'Delivered';
}

const OrderProgress: React.FC<OrderProgressProps> = ({ userType, status }) => {
  // Map status to index
  const getStatusIndex = (status: string) =>
    statusStages.findIndex((stage) => stage.label === status);

  const [currentStage, setCurrentStage] = useState<number>(
    getStatusIndex(status),
  );

  // Update stage if status prop changes
  useEffect(() => {
    setCurrentStage(getStatusIndex(status));
  }, [status]);

  const handleNextStage = () => {
    if (currentStage < statusStages.length - 1) {
      setCurrentStage(currentStage + 1);
    }
  };

  return (
    <div className='flex md:flex-row flex-col items-center p-4 w-full'>
      <div className='flex justify-between w-full max-w-lg relative'>
        {statusStages.map((stage, index) => (
          <div key={index} className='flex flex-col items-center'>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                index <= currentStage ? stage.color : 'bg-gray-200'
              }`}
            >
              {index + 1}
            </div>
            <span className='text-sm mt-2'>{stage.label}</span>
          </div>
        ))}
        <div className='absolute top-4 left-0 right-0 h-1 bg-gray-300 w-full z-[-1]' />
        <div
          className='absolute top-4 left-0 h-1 bg-current transition-all duration-300'
          style={{
            width: `${(currentStage / (statusStages.length - 1)) * 100}%`,
          }}
        />
      </div>
      {userType !== 'customer' && (
        <button
          className='mt-4 px-4 py-2 mx-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-300'
          onClick={handleNextStage}
          disabled={currentStage === statusStages.length - 1}
        >
          Next Stage
        </button>
      )}
    </div>
  );
};

export default OrderProgress;
