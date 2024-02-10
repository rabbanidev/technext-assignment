/* eslint-disable @typescript-eslint/no-explicit-any */

type Iprops = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  [key: string]: any;
};

const CustomInput = ({ onChange, ...rest }: Iprops) => {
  return (
    <input
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      onChange={onChange}
      {...rest}
    />
  );
};

export default CustomInput;
