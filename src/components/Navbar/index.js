import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const NavBar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
  };

  return (
    <>
      <nav>
        <NavLink className="navlink" to="/home">
          Home
        </NavLink>
        <NavLink className="navlink" to="/routines">
          Routines
        </NavLink>
        <NavLink className="navlink" to="/myRoutines">
          My Routines
        </NavLink>
        <NavLink className="navlink" to="/activities">
          activities
        </NavLink>
        <NavLink
          onClick={() => {
            logout();
          }}
        >
          Logout
        </NavLink>
      </nav>
    </>
  );
};

export default NavBar;
