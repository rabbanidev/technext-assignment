import { IUser } from "../../interface/user";
import ErrorMessage from "../ErrorMessage";
import UserCard from "./UserCard";
import UserLoading from "./UserLoading";

type IProps = {
  loading: boolean;
  error: string;
  users: IUser[];
};

const UserList = ({ loading, error, users }: IProps) => {
  if (loading) {
    return <UserLoading />;
  } else if (!loading && error) {
    return <ErrorMessage message={error} />;
  } else if (!loading && !error && users.length === 0) {
    return <ErrorMessage message="User list is empty!" />;
  }

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-7 lg:grid-cols-3 lg:gap-10">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
