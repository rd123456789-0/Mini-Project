import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import classes from "../styles/Account.module.css";

export default function Account() {
  const { currentUser, logout } = useAuth();
  return (
    <div className={classes.account}>
      {currentUser ? (
        <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span>{currentUser.displayName}</span>
          <span
            className="material-icons-outlined"
            title="Logout"
            onClick={logout}
          >
            {" "}
            logout{" "}
          </span>
        </>
      ) : (
        <>
          <Link
            to="/signup"
            style={{ color: "#16DB93", fontSize: "medium", fontWeight: 500 }}
          >
            Signup
          </Link>
          <Link
            to="/login"
            style={{ color: "#16DB93", fontSize: "medium", fontWeight: 500 }}
          >
            Login
          </Link>
        </>
      )}
    </div>
  );
}
