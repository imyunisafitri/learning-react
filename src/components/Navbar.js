import { NavLink } from "react-router-dom";
//import Breadcumbs from "./Breadcrumbs";

const Navbar = () => {
  return (
    <header>
      <nav>
        <h1>Logo</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/careers">Careers</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/help">Help</NavLink>
      </nav>
      {/* <Breadcumbs /> */}
    </header>
  );
};

export default Navbar;
