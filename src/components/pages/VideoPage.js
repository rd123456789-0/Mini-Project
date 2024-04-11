import React, { useState } from "react";
import ReactPlayer from "react-player";
import Button from "../Button";
import { Link, useParams } from "react-router-dom";
import classes from "../../styles/VideoPage.module.css";

export const VideoPage = () => {
  const { id } = useParams();
  const [status, setStatus] = useState(false);
  const videoUrl = `https://www.youtube.com/watch?v=${id}`;

  function toggleMiniPlayer() {
    if (!status) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }
  return (
    <div onClick={toggleMiniPlayer}>
      <ReactPlayer
        className={classes.player}
        url={videoUrl}
        width="100%"
        height="100%"
        playing={status}
        controls
      />

      <div className={classes.buttons}>
      <Link to={`/quiz/${id}`}>
        <Button className={classes.attemptquiz}>Attempt Quiz</Button>
      </Link>
      
      <Link to={`/games`}>
        <Button className={classes.attemptquiz}>Play Games</Button>
      </Link>
      </div>
    </div>
  );
};
