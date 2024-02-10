const UserDetailsLoading = () => {
  return (
    <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-10 md:gap-y-0">
      <div className="col-span-1">
        <div className="animate-pulse bg-gray-300 rounded-lg h-56 md:h-72 lg:h-80 xl:h-96"></div>
      </div>
      <div className="col-span-1">
        <div className="py-4 px-6">
          <div className="animate-pulse bg-gray-300 rounded-lg h-6 w-64 mb-4"></div>
          <div className="flex items-center mt-4 text-gray-700">
            <div className="h-4 bg-gray-300 rounded w-4"></div>
            <div className="ml-2 animate-pulse bg-gray-300 rounded h-4 w-24"></div>
          </div>
          <div className="flex items-center mt-4 text-gray-700">
            <div className="h-4 bg-gray-300 rounded w-4"></div>
            <div className="ml-2 animate-pulse bg-gray-300 rounded h-4 w-48"></div>
          </div>
          <div className="flex items-center mt-4 text-gray-700">
            <div className="h-4 bg-gray-300 rounded w-4"></div>
            <div className="ml-2 animate-pulse bg-gray-300 rounded h-4 w-32"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsLoading;
