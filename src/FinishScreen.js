import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Typography } from "@material-tailwind/react";
import { faRotateBack } from "@fortawesome/free-solid-svg-icons";
import Confetti from "react-confetti";

function FinishScreen({ points, numQuestions, highscore, dispatch, category }) {
  return (
    <div>
      {points >= numQuestions * 5 && (
        <Confetti
          numberOfPieces={500}
          colors={[
            "#141414",
            "#626262",
            "#b5b5b5",
            "#2b2b2b",
            "#787878",
            "#dbdbdb",
          ]}
          gravity={0.03}
          recycle={false}
        />
      )}
      <div className="flex justify-center items-center py-20 sm:py-20 lg:py-40">
        <div className="container mx-auto text-center">
          <Typography
            variant="h3"
            className="my-5"
          >{`Your score: ${points}`}</Typography>
          <Typography
            variant="h3"
            className="my-5"
          >{`Highscore: ${highscore[category]}`}</Typography>
          <Typography variant="h4">
            {points === numQuestions * 10
              ? `You have a perfect score!`
              : points >= numQuestions * 5
              ? `You did really well!`
              : `Better luck next time!`}
          </Typography>
          <Button
            variant="gradient"
            size="lg"
            className="rounded-full w-auto mb-2 mt-44"
            onClick={() => dispatch({ type: "restart" })}
          >
            Play Again
            <FontAwesomeIcon icon={faRotateBack} className="fa-lg pl-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FinishScreen;
