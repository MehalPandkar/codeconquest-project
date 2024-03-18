import { Spinner } from "@material-tailwind/react";

function Loader() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-300 bg-opacity-50 z-50">
      <Spinner className="w-20 h-20" />
    </div>
  );
}

export default Loader;
