import image from "../assets/images/success.png";
import classes from "../styles/Summary.module.css";
import { TextToSpeech } from "./TextToSpeech";

export default function Summary({ score, noq }) {
  let message = "";

  const setSummary = () => {
    switch (score) {
      case 0:
        message =
          "Review Mistakes Carefully: Take the time to understand why you got the question wrong. Was it a misunderstanding of the concept, a calculation error, or a simple oversight? Understanding your mistakes is crucial for learning.Remember, learning from mistakes is a valuable part of the learning process. Embrace them as opportunities for growth and keep pushing yourself to improve!";
        break;
      case 5:
        message =
          "If there's a concept you're still unsure about, don't hesitate to ask your teacher, a tutor, or a parent for clarification. Getting a clear explanation can help solidify your understanding.Look for similar questions in your textbook, online resources, or practice exams. Practice makes perfect, and tackling similar problems can help reinforce your understanding and improve your skills.";
        break;
      case 10:
        message =
          "Write down the key concepts or formulas related to the question you got wrong on flashcards. Reviewing these regularly can help commit them to memory. Revisit the questions which you feel are difficulty";
        break;
      case 15:
        message =
          "Explaining the concept to someone else, like a friend or family member, can be an effective way to reinforce your understanding. Teaching forces you to organize your thoughts and can highlight areas where you need further clarification.";
        break;
      case 20:
        message =
          "Your test scores show your strengths and areas for growth. Celebrate your successes and use them as motivation to keep improving. Don't be discouraged by any challenges you face; they're opportunities to learn and grow stronger. Keep working hard, believe in yourself, and you'll reach your goals!";
        break;
      default:
        message = "Need To Practice";
        break;
    }
  };

  return (
    <>
    {setSummary()}
      <div className={classes.summary}>
        <div className={classes.point}>
          <p className={classes.score}>
            Your score is <br />
            {score} out of {noq * 5}
          </p>
        </div>

        <div className={classes.badge}>
          <img src={image} alt="Success" />
        </div>
      </div>
      <div className={classes.suggestion}>
        <h2>Suggestion</h2>
        <p>{message}</p>
      </div>
      <div className={classes.textToSpeech}>
        <TextToSpeech text={message} />
      </div>
    </>
  );
}
