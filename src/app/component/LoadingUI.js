

const LoadingUI = () => {
  return (
    <div className="fixed inset-0 bg-orange-50/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-orange-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-orange-500 rounded-full border-t-transparent animate-spin"></div>
        </div>
        <div className="text-orange-500 text-lg font-medium animate-pulse">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default LoadingUI;
// components/LoadingUI.js
// const LoadingUI = () => {
//   return (
//     <div className="fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50">
//       <div className="flex flex-col items-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-700"></div>
//         <p className="mt-4 text-red-700">Loading...</p>
//       </div>
//     </div>
//   );
// };

// export default LoadingUI;