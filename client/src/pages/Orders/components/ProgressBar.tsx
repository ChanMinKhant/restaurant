interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className='w-full bg-gray-300 rounded-full h-3 mt-2'>
      <div
        className='bg-green-500 h-3 rounded-full transition-all duration-500'
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
