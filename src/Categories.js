import { Button, Typography } from "@material-tailwind/react";
import useFetchQuestions from "./useFetchQuestions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faLinux } from "@fortawesome/free-brands-svg-icons";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import { faInfinity } from "@fortawesome/free-solid-svg-icons";
import { faDocker } from "@fortawesome/free-brands-svg-icons";

function Categories({ dispatch, category }) {
  useFetchQuestions(category, dispatch);
  return (
    <div className="flex flex-col justify-center items-center py-20 sm:py-20 lg:py-40">
      <Typography
        variant="h1"
        className="text-center text-4xl sm:text-5xl lg:text-5xl mb-8 sm:mb-10 px-8 sm:px-20 lg:px-40"
      >
        Choose the category you want to master
      </Typography>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 mt-8 sm:mt-12 lg:mt-16">
        <Button
          size="lg"
          variant="outlined"
          className="rounded-full m-3 sm:m-5"
          onClick={() => dispatch({ type: "chooseCategory", payload: "code" })}
        >
          <FontAwesomeIcon icon={faCode} className="fa-lg pr-2" />
          Coding
        </Button>
        <Button
          size="lg"
          variant="outlined"
          className="rounded-full m-3 sm:m-5"
          onClick={() => dispatch({ type: "chooseCategory", payload: "sql" })}
        >
          <FontAwesomeIcon icon={faDatabase} className="fa-lg pr-2" />
          SQL
        </Button>
        <Button
          size="lg"
          variant="outlined"
          className="rounded-full m-3 sm:m-5"
          onClick={() => dispatch({ type: "chooseCategory", payload: "linux" })}
        >
          <FontAwesomeIcon icon={faLinux} className="fa-lg pr-2" />
          Linux
        </Button>
        <Button
          size="lg"
          variant="outlined"
          className="rounded-full m-3 sm:m-5"
          onClick={() => dispatch({ type: "chooseCategory", payload: "bash" })}
        >
          <FontAwesomeIcon icon={faTerminal} className="fa-lg pr-2" />
          Bash
        </Button>
        <Button
          size="lg"
          variant="outlined"
          className="rounded-full m-3 sm:m-5"
          onClick={() =>
            dispatch({ type: "chooseCategory", payload: "devops" })
          }
        >
          <FontAwesomeIcon icon={faInfinity} className="fa-lg pr-2" />
          DevOps
        </Button>
        <Button
          size="lg"
          variant="outlined"
          className="rounded-full m-3 sm:m-5"
          onClick={() =>
            dispatch({ type: "chooseCategory", payload: "docker" })
          }
        >
          <FontAwesomeIcon icon={faDocker} className="fa-lg pr-2" />
          Docker
        </Button>
      </div>
    </div>
  );
}

export default Categories;
