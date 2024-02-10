import { BiSolidLocationPlus, BiLogoGmail, BiBuildings } from "react-icons/bi";
import { IUser } from "../../interface/user";

type IUserProps = {
  user: IUser;
};

const UserCard = ({ user }: IUserProps) => {
  const { fullName, email, image, address, company } = user;
  const { address: street, city, state } = address;
  const { name: companyName } = company;

  return (
    <div className="col-span-1 max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-full h-56 object-cover object-center"
        src={image}
        alt={fullName}
      />
      <div className="py-4 px-6">
        <h1 className="text-2xl font-semibold capitalize text-gray-800">
          {fullName}
        </h1>

        <div className="flex items-center mt-4 text-gray-700">
          <BiLogoGmail />
          <p className="px-2 text-sm">{email}</p>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          <BiSolidLocationPlus />
          <p className="px-2 text-sm">
            {street} {state} {city}
          </p>
        </div>
        <div className="flex items-center mt-4 text-gray-700">
          <BiBuildings />
          <p className="px-2 text-sm">{companyName}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
