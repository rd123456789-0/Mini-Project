import { Link } from "react-router-dom";
import logo from "../assets/images/logo-bg.png";
import classes from "../styles/Nav.module.css";
import Account from "./Account";
import { useAuth } from "../contexts/AuthContext";
import { Timer } from "./Timer";

export default function Nav() {
  const { currentUser } = useAuth();
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link to="/" className={classes.brand}>
            <img src={logo} alt="QuizOrbit Logo" />
            <h3>QuizOrbit</h3>
          </Link>
        </li>
        <li>
          
        {currentUser && <Timer start={{ initialMinute: 20, initialSecond: 0 }} />}
        </li>
      </ul>
      <Account />
    </nav>
  );
}