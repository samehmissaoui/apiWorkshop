
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import User from "./User";
import { getUsers } from "../../JS/actions/userAction";
const Users = () => {
  const isLoading = useSelector((state) => state.users.userList.isLoading);
  const users = useSelector((state) => state.users.userList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
    return () => {};
  }, [dispatch]);
  return isLoading ? (
    <span className="sr-only">Loading...</span>
  ) : (
    <div>
      {users.map((user, key) => (
        <User user={user} key={key} />
      ))}
    </div>
  );
};
export default Users;
