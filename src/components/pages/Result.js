import _ from "lodash";
import { useParams } from "react-router-dom";
import useAnswers from "../../hooks/useAnswers";
import Analysis from "../Analysis";
import Summary from "../Summary";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import Button from "../Button";
import classes from '../../styles/Button.module.css'


export default function Result() {
  const { id } = useParams();

  const { qna } = useSelector(state => state.qna);

  const { loading: nowLoading, error: error1, answers } = useAnswers(id);

  function calculate() {
    let score = 0;

    answers.forEach((question, index1) => {
      let correctIndexes = [],
        checkedIndexes = [];

      qna &&
        question.options.forEach((option, index2) => {
          if (option.correct) correctIndexes.push(index2);
          if (qna[index1].options[index2].checked) {
            checkedIndexes.push(index2);
            option.checked = true;
          }
        });

      if (_.isEqual(correctIndexes, checkedIndexes)) {
        score = score + 5;
      }
    });

    return score;
  }

  const userScore = calculate();

  return (
    <>
      {nowLoading && <div>Loading...</div>}
      {error1 && <div>There was an error!</div>}

      {answers && answers.length > 0 && (
        <>
          <Summary score={userScore} noq={answers.length} />
          <Analysis answers={answers} />
          
          <Link to={`/`}>
            <Button
              className={classes.attemptquiz}
            >
              Back To Home
            </Button>
          </Link>
        </>
      )}
    </>
  );
}
