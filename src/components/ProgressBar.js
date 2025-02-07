// import { useEffect, useRef, useState } from "react";
import classes from "../styles/ProgressBar.module.css";
import Button from "./Button";
import doll from "../assets/images/doll.svg";

export default function ProgressBar({ next, prev, submit, progress }) {
  return (
    <div className={classes.progressBar}>
      <div className={classes.backButton} onClick={prev}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={classes.rangeArea}>
        <div
          className={classes.tooltip}
          style={{
            left: `calc(${progress}% - 65px)`
          }}
        >
          <img src={doll} alt="" />
        </div>
        <div className={classes.rangeBody}>
          <div
            className={classes.progress}
            style={{ width: `${progress}%` }}
            // onMouseOver={toggleTooltip}
            // onMouseOut={toggleTooltip}
          ></div>
        </div>
      </div>
      <Button
        className={classes.next}
        onClick={progress === 100 ? submit : next}
      >
        <span>{progress === 100 ? "Submit Quiz" : "Next Question"}</span>
        <span className="material-icons-outlined"> arrow_forward </span>
      </Button>
    </div>
  );
}
