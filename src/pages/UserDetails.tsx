/* eslint-disable @typescript-eslint/no-explicit-any */

import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import { IUser } from "../interface/user";
import { useEffect, useState } from "react";
import { fetchUser } from "../api/user";
import { BiBuildings, BiLogoGmail, BiSolidLocationPlus } from "react-icons/bi";
import UserDetailsLoading from "../components/user/UserDetailsLoading";
import ErrorMessage from "../components/ErrorMessage";

const UserDetails = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [user, setUser] = useState<IUser | null>(null);

  // fetching users data
  useEffect(() => {
    let ignore = false;

    const startFetching = async () => {
      setLoading(true);
      try {
        const json = await fetchUser(id as string);
        if (!ignore) {
          setUser(json);
        }
      } catch (error: any) {
        console.log("Error: ", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    startFetching();

    return () => {
      ignore = true;
    };
  }, [id]);

  // let decided what to render
  let content = null;
  if (loading) {
    content = <UserDetailsLoading />;
  } else if (!loading && error) {
    content = <ErrorMessage message={error} />;
  } else if (!loading && !error && !user) {
    content = <ErrorMessage message="User Not Found!" />;
  } else {
    const { fullName, email, image, address, company } = user as IUser;
    const { address: street, city, state } = address;
    const { name: companyName } = company;

    content = (
      <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-10 md:gap-y-0">
        <div className="col-span-1">
          <img
            className="w-full h-56  md:h-72 lg:h-80 xl:h-96"
            src={image}
            alt={fullName}
          />
        </div>
        <div className="col-span-1">
          <div className="py-4 px-6">
            <h1 className="text-2xl font-semibold capitalize text-gray-800">
              Terry Smitham Medhurst
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
      </div>
    );
  }

  return (
    <Layout>
      <section className="container">{content}</section>
    </Layout>
  );
};

export default UserDetails;
