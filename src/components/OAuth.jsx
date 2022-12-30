import { FcGoogle } from "react-icons/fc";

const OAuth = () => {
  return (
    <button className="flex justify-center items-center w-full border border-gray-300 px-4 py-2 rounded-sm hover:bg-gray-100 transition-all duration-200 ease-in-out">
      <FcGoogle className="text-2xl mr-2" /> Continue with Google
    </button>
  );
};

export default OAuth;
