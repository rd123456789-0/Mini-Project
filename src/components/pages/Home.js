import Button from "../Button";
import Videos from "../Videos";
import { Link } from 'react-router-dom';
import classes from '../../styles/Button.module.css'

export default function Home() {
  return (
    <>
    <Videos />
    
    <Link to={`/`}>
            <Button
              className={classes.attemptquiz}
            >
              Back To Home
            </Button>
          </Link>
    </>
  );
}