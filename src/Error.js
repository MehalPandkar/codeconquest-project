import { Typography, Button } from "@material-tailwind/react";

function Error({ dispatch }) {
  return (
    <div className="flex flex-col justify-center items-center py-20 sm:py-20 lg:py-40">
      <Typography
        variant="h2"
        className="text-center px-4 sm:px-10 lg:px-40 m-8 sm:m-8 lg:m-10"
      >
        There was some error!
      </Typography>
      <Button
        className="rounded-full"
        size="lg"
        onClick={() => dispatch({ type: "startscreen" })}
      >
        Try Again
      </Button>
    </div>
  );
}

export default Error;
