import { IUser } from "../interface/user";

export const fetchUsers = async (
  searchValue: string
): Promise<{
  users: IUser[];
  total: number;
  skip: number;
  limit: number;
}> => {
  let url = "https://dummyjson.com/users";

  if (searchValue) {
    url += `/search?q=${searchValue}`;
  }

  // console.log(url);

  const result = await fetch(url);
  return result.json();
};
