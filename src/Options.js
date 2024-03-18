import React from "react";
import { Button } from "@material-tailwind/react";

function Options({ question, dispatch, correctAnswer, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div className="flex flex-col">
      {Object.entries(question.answers).map(
        ([optionKey, option], index) =>
          option && (
            <Button
              key={option}
              variant={optionKey === correctAnswer ? "gradient" : "outlined"}
              className="rounded-full w-auto mb-2"
              disabled={hasAnswered}
              onClick={() =>
                dispatch({ type: "newAnswer", payload: optionKey })
              }
            >
              {option}
            </Button>
          )
      )}
    </div>
  );
}

export default Options;
