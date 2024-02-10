import classes from "../styles/Illustration.module.css";
import pleaselogin from "../assets/images/pleaselogin.svg";

export default function Illustration() {
  return (
    <div className={classes.illustration}>
      <img src={pleaselogin} alt="Signup" />
    </div>
  );
}
