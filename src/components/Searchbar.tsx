import { useEffect, useState } from "react";

type IProps = {
  searchTerm: string;
  onSearch: (value: string) => void;
};

const Searchbar = ({ searchTerm, onSearch }: IProps) => {
  const [searchValue, setSearchValue] = useState<string>(searchTerm);

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchValue);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [onSearch, searchValue]);

  return (
    <div className="relative overflow-hidden text-gray-50 md:min-w-[380px] lg:min-w-[440px] rounded-md">
      <input
        type="search"
        id="search-dropdown"
        className="z-20 block w-full border px-4 py-2.5 pr-10  rounded-md placeholder:text-neutral-400 text-neutral-800"
        placeholder="Search by user name"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button
        type="button"
        className="absolute right-0 inline-flex items-center justify-center w-10 top-0 h-full rounded-e-lg text-neutral-800"
      >
        <svg
          className="h-4 w-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <span className="sr-only">Search</span>
      </button>
    </div>
  );
};

export default Searchbar;
