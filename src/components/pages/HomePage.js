import React from "react";
import maths from "../../assets/images/maths.jpg";
import classes from "../../styles/Homepage.module.css";
import sports from "../../assets/images/sports.jpg";
import english from "../../assets/images/english.jpg";
import valueEducation from "../../assets/images/valueEducation.jpg";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className={classes.homeSection}>
      <Link to="/home">
        <div className={classes.card}>
          <img src={maths} alt="" className={classes.img} />
          <div>
            <h1 className={classes.heading}>Maths</h1>
          </div>
        </div>
      </Link>
      <Link to="/home">
        <div className={classes.card}>
          <img src={sports} alt="" className={classes.img} />
          <div>
            <h1 className={classes.heading}>Sports</h1>
          </div>
        </div>
      </Link>
      <Link to="/home">
        <div className={classes.card}>
          <img src={english} alt="" className={classes.img} />
          <div>
            <h1 className={classes.heading}>English</h1>
          </div>
        </div>
      </Link>
      <Link to="/home">
        <div className={classes.card}>
          <img src={valueEducation} alt="" className={classes.img} />
          <div>
            <h1 className={classes.heading}>Value Education</h1>
          </div>
        </div>
      </Link>
    </div>
  );
};
