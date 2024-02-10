/* eslint-disable @typescript-eslint/no-explicit-any */

import UserCard from "../components/user/UserCard";
import Layout from "../components/layout";
import Searchbar from "../components/Searchbar";
import SortDropdown from "../components/SortDropdown";
import { useEffect, useState } from "react";
import { IUser } from "../interface/user";
import { fetchUsers } from "../api/user";
import UserLoading from "../components/user/UserLoading";
import ErrorMessage from "../components/ErrorMessage";

type ISort = {
  label: string;
  value: string;
};

const sortOptions: ISort[] = [
  {
    label: "Name",
    value: "username",
  },
  {
    label: "Email",
    value: "email",
  },
  {
    label: "Company Name",
    value: "companyName",
  },
];

const UserList = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [users, setUsers] = useState<IUser[]>([]);
  const [sortBy, setSortBy] = useState<string>("");

  // fetching users data
  useEffect(() => {
    let ignore = false;

    const startFetching = async () => {
      setLoading(true);
      try {
        const json = await fetchUsers(searchTerm);
        if (!ignore) {
          const jsonUsers = json.users.map((user) => ({
            ...user,
            fullName: `${user.firstName} ${user.maidenName} ${user.lastName}`,
          }));
          setUsers(jsonUsers);
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
  }, [searchTerm]);

  // derived state
  const userList = users.slice().sort((a, b) => {
    switch (sortBy) {
      case "username":
        return a.fullName.localeCompare(b.fullName);

      case "email":
        return a.email.localeCompare(b.email);

      case "companyName":
        return a.company.name.localeCompare(b.company.name);

      default:
        return 0;
    }
  });

  // let decided what to render
  let content = null;
  if (loading) {
    content = <UserLoading />;
  } else if (!loading && error) {
    content = <ErrorMessage message={error} />;
  } else if (!loading && !error && userList.length === 0) {
    content = <p className="text-2xl text-center">User list is empty!</p>;
  } else {
    content = (
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-7 lg:grid-cols-3 lg:gap-10">
        {userList.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    );
  }

  return (
    <Layout>
      <section className="relative font-[Manrope] before:fixed before:left-0 before:top-0 before:-z-10 before:h-[435px] before:w-full before:rounded-bl-3xl before:bg-[#EAE6D7] max-md:px-4 lg:text-lg before:lg:rounded-bl-[79px]">
        <div className="container">
          <div className="mb-12 flex flex-col md:flex-row md:justify-between md:items-center">
            <Searchbar
              searchTerm={searchTerm}
              onSearch={(searchValue) => setSearchTerm(searchValue)}
            />
            <div className="mt-5 flex flex-col md:flex-row md:items-center md:mt-0 gap-5">
              <SortDropdown
                options={sortOptions}
                value={sortBy}
                onSort={(e) => {
                  console.log(e.target.value);
                  setSortBy(e.target.value);
                }}
              />
              <a
                href="#"
                className="py-2 px-5 font-medium text-gray-600 focus:outline-none bg-white rounded-md"
              >
                Add User
              </a>
            </div>
          </div>

          {content}
        </div>
      </section>
    </Layout>
  );
};

export default UserList;
