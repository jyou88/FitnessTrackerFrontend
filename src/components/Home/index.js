import NavBar from "../Navbar";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <Link to="/logIn">"Need to log in? Click Here and get going!</Link>
      <Link to="/register">
        "Not signed up yet? Click Here to get registered!
      </Link>
    </div>
  );
};
