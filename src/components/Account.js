import { Link,useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import classes from "../styles/Account.module.css";

export default function Account() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    window.alert('Loging Out');
    navigate('login');
    logout();
  }
  return (
    <div className={currentUser ? classes.account : classes.log}>
      {currentUser ? (
        <>
          <div className={classes.special}>
            <span className="material-icons-outlined" title="Account">
              account_circle
            </span>
            <p>{currentUser.displayName}</p>
            <span
              className="material-icons-outlined"
              title="Logout"
              onClick={handleLogout}
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
