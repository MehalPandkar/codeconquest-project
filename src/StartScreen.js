import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button, Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TypeAnimation } from "react-type-animation";

function StartScreen({ dispatch }) {
  return (
    <div className="flex justify-center items-center py-20 sm:py-20 lg:py-40">
      <div className="container mx-auto text-center">
        <Typography
          variant="h1"
          className="px-4 sm:px-10 lg:px-40 m-4 sm:m-8 lg:m-10"
        >
          Conquer your technical knowledge on
        </Typography>
        <TypeAnimation
          sequence={[
            "JavaScript",
            500,
            "Python",
            500,
            "PHP",
            500,
            "SQL",
            500,
            "Linux",
            500,
            "Bash",
            500,
            "DevOps",
            500,
            "Docker",
            500,
          ]}
          speed={50}
          className="block font-sans antialiased tracking-normal text-5xl font-semibold leading-tight px-4 sm:px-10 lg:px-40 m-4 sm:m-8 lg:m-10"
          repeat={Infinity}
          preRenderFirstString={true}
        />
        <Button
          size="lg"
          variant="gradient"
          className="rounded-full mt-4 sm:mt-8 lg:mt-10"
          onClick={() => dispatch({ type: "start" })}
        >
          Get started
          <FontAwesomeIcon icon={faArrowRight} className="fa-lg pl-2" />
        </Button>
      </div>
    </div>
  );
}

export default StartScreen;
