const loadingArray = new Array(6).fill(null);

const UserLoading = () => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-7 lg:grid-cols-3 lg:gap-10">
      {loadingArray.map((_item, i) => (
        <div
          key={i}
          className="col-span-1 max-w-sm bg-white shadow-lg rounded-lg overflow-hidden animate-pulse"
        >
          <div className="w-full h-56 bg-gray-300"></div>
          <div className="py-4 px-6 space-y-3">
            <div className="h-6 bg-gray-300 rounded-md w-3/4"></div>
            <div className="flex items-center mt-4 space-x-2">
              <div className="h-4 bg-gray-300 rounded-md w-6"></div>
              <div className="h-4 bg-gray-300 rounded-md w-1/4"></div>
            </div>
            <div className="flex items-center mt-4 space-x-2">
              <div className="h-4 bg-gray-300 rounded-md w-6"></div>
              <div className="h-4 bg-gray-300 rounded-md w-1/2"></div>
            </div>
            <div className="flex items-center mt-4 space-x-2">
              <div className="h-4 bg-gray-300 rounded-md w-6"></div>
              <div className="h-4 bg-gray-300 rounded-md w-1/3"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserLoading;
