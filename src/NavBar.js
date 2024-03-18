import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import useFetchQuestions from "./useFetchQuestions";

function NavList({ category, dispatch, fetching, setOpenNav }) {
  useFetchQuestions(category, dispatch, fetching);
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <button
          href="#"
          className="flex items-center hover:bg-gray-200 px-3 py-3 rounded-full transition-colors "
          onClick={() => {
            dispatch({ type: "chooseCategory", payload: "code" });
            setOpenNav(false);
          }}
        >
          Programming
        </button>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <button
          href="#"
          className="flex items-center hover:bg-gray-200 px-3 py-3 rounded-full transition-colors "
          onClick={() => {
            dispatch({ type: "chooseCategory", payload: "sql" });
            setOpenNav(false);
          }}
        >
          SQL
        </button>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <button
          href="#"
          className="flex items-center hover:bg-gray-200 px-3 py-3 rounded-full transition-colors "
          onClick={() => {
            dispatch({ type: "chooseCategory", payload: "linux" });
            setOpenNav(false);
          }}
        >
          Linux
        </button>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <button
          href="#"
          className="flex items-center hover:bg-gray-200 px-3 py-3 rounded-full transition-colors "
          onClick={() => {
            dispatch({ type: "chooseCategory", payload: "bash" });
            setOpenNav(false);
          }}
        >
          Bash
        </button>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <button
          href="#"
          className="flex items-center hover:bg-gray-200 px-3 py-3 rounded-full transition-colors "
          onClick={() => {
            dispatch({ type: "chooseCategory", payload: "devops" });
            setOpenNav(false);
          }}
        >
          DevOps
        </button>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <button
          href="#"
          className="flex items-center hover:bg-gray-200 px-3 py-3 rounded-full transition-colors "
          onClick={() => {
            dispatch({ type: "chooseCategory", payload: "docker" });
            setOpenNav(false);
          }}
        >
          Docker
        </button>
      </Typography>
    </ul>
  );
}

function NavBar({ category, dispatch, fetching }) {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <div>
      <Navbar shadow={false} className="mx-auto px-6 py-3">
        <div className="flex justify-between items-center text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            variant="h5"
            className="mr-4 cursor-pointer py-1.5"
          >
            {`</> CodeConquest`}
          </Typography>
          <div className="hidden lg:block">
            <NavList
              category={category}
              dispatch={dispatch}
              fetching={fetching}
              setOpenNav={setOpenNav}
            />
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList
            category={category}
            dispatch={dispatch}
            fetching={fetching}
            setOpenNav={setOpenNav}
          />
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
