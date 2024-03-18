import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@material-tailwind/react";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";

function Nav({ dispatch }) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-5 md:px-10 mt-5">
      <button onClick={() => dispatch({ type: "restart" })}>
        <Typography variant="h4" className="mb-2 md:mb-0 md:mr-4">
          <FontAwesomeIcon icon={faCodeBranch} className="fa-lg pr-2" />
          CodeConquest
        </Typography>
      </button>
      <div className="flex items-center">
        <FontAwesomeIcon icon={faReact} className="fa-xl px-2" />
        <Typography className="text-sm">Powered by React</Typography>
      </div>
    </div>
  );
}

export default Nav;
