function ProtectedRoute() {
  return (
    <div className='flex justify-center items-center w-screen h-screen text-3xl font-bold text-red-600 bg-gray-100'>
      <div className='p-6 bg-white shadow-lg rounded-lg border border-gray-300'>
        🚫 Unauthorized Access
      </div>
    </div>
  );
}

export default ProtectedRoute;
