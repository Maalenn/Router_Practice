import { NavLink, Outlet } from "react-router-dom";

const AboutLayout = () => {
  return (
    <div>
      <h3>About Page</h3>
      <div className="nav-link">
        <NavLink to="vision">Vision</NavLink>
        <NavLink to="mission">Mision</NavLink>
        <NavLink to="goal">Goal</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default AboutLayout;
