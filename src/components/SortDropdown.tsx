/* eslint-disable @typescript-eslint/no-explicit-any */

type Iprops = {
  options: {
    label: string;
    value: string;
  }[];
  onSort: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  [key: string]: any;
};

const SortDropdown = ({ options, onSort, ...rest }: Iprops) => {
  return (
    <div className="flex items-stretch space-x-3">
      <select
        className="w-full cursor-pointer rounded-md border px-4 py-2 text-left text-gray-600"
        name="sortBy"
        id="sortBy"
        onChange={onSort}
        {...rest}
      >
        <option value="">Sort</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortDropdown;
