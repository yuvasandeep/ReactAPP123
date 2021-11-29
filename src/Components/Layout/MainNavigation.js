import { useContext } from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBell } from "@fortawesome/free-solid-svg-icons";
import classes from "./MainNavigation.module.css";
import AuthContext from "../store/auth-context";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const logoutHandler = () => {
    authCtx.logout();
  };
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Project</div>
      </Link>
      <nav>
        <ul>
          {/* {isLoggedIn && (
            <li>
              <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
            </li>
          )} */}

          {isLoggedIn && (
            <li>
              <Link to="/">Home</Link>
            </li>
          )}

          {!isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
