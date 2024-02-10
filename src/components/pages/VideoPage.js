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

  console.log(id);
  return (
    <div className="flex" onClick={toggleMiniPlayer}>
      <ReactPlayer
        className={classes.player}
        url={videoUrl}
        width="1200px"
        height="600px"
        playing={status}
        controls
      />

      <Link to={`/quiz/${id}`}>
        <Button className={classes.attemptquiz}>Attempt Quiz</Button>
      </Link>
    </div>
  );
};
