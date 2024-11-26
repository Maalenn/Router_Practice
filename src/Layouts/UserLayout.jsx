import { Outlet } from "react-router-dom";
const UserLayout = () => {
  return (
    <div>
      <h4>User Page</h4>
      <Outlet />
    </div>
  );
};

export default UserLayout;
