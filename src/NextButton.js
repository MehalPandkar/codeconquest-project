import { Button } from "@material-tailwind/react";

function NextButton({ dispatch, index, numQuestions, answer }) {
  if (answer === null) return;
  if (index < numQuestions - 1) {
    return (
      <Button
        variant="gradient"
        className="rounded-full w-auto mb-2 mt-2 float-right"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </Button>
    );
  } else {
    return (
      <Button
        variant="gradient"
        className="rounded-full w-auto mb-2 mt-2 float-right"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </Button>
    );
  }
}

export default NextButton;
