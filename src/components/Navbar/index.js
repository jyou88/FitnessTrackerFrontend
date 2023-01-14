import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const NavBar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
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

        <NavLink className="navlink" to="/activities">
          activities
        </NavLink>
        {localStorage.getItem("username") && (
          <>
            <NavLink className="navlink" to="/userroutines">
              Your Routines
            </NavLink>
            <NavLink className="navlink" to="/myRoutines">
              Create a Routine
            </NavLink>
            <NavLink
              onClick={() => {
                logout();
              }}
            >
              Logout
            </NavLink>
          </>
        )}
      </nav>
    </>
  );
};

export default NavBar;
