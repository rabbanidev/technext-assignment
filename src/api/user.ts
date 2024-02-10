import { IUser } from "../interface/user";

const USER_API_URL: string = "https://dummyjson.com/users";

export const fetchUsers = async (
  searchValue: string
): Promise<{
  users: IUser[];
  total: number;
  skip: number;
  limit: number;
}> => {
  let url = USER_API_URL;

  if (searchValue) {
    url += `/search?q=${searchValue}`;
  }

  const result = await fetch(url);
  return result.json();
};

export const fetchUser = async (userId: string | number): Promise<IUser> => {
  const url = `${USER_API_URL}/${userId}`;
  const result = await fetch(url);
  return result.json();
};
