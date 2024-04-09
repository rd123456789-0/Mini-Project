import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import classes from "../styles/Account.module.css";
import { Timer } from "./Timer";

export default function Account() {
  const { currentUser, logout } = useAuth();
  return (
    <div className={currentUser ? classes.account : classes.log}>
      {currentUser ? (
        <>
          <Timer start={{ initialMinute: 20, initialSecond: 0 }} />
          <div>
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
          </div>
        </>
      ) : (
        <div className={classes.log}>
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
        </div>
      )}
    </div>
  );
}
