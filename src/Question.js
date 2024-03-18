import { Typography } from "@material-tailwind/react";
import Options from "./Options";

function Question({ question, dispatch, index, answer, correctAnswer }) {
  return (
    <div>
      <Typography variant="h3" className="text-center mb-20">
        Q{index + 1}: {question.question}
      </Typography>
      <Options
        question={question}
        dispatch={dispatch}
        correctAnswer={correctAnswer}
        answer={answer}
      />
    </div>
  );
}

export default Question;
