import { Progress, Typography } from "@material-tailwind/react";

function ProgressBar({ index, numQuestions, answer, points }) {
  return (
    <div className="w-full mb-16">
      <div className="mb-2 flex items-center justify-between gap-4">
        <Typography color="blue-gray" variant="h6">
          Completed
        </Typography>
        <Typography color="blue-gray" variant="h6">
          {`${index + 1} / ${numQuestions}`}
        </Typography>
      </div>
      <Progress
        value={((index + Number(answer !== null)) * 100) / numQuestions}
      />
    </div>
  );
}

export default ProgressBar;
