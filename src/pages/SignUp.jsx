import React, { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-normal px-6 py-12 max-w-6xl mx-auto">
        Register to realtor.com
      </h1>
      <div className="flex justify-center flex-col-reverse md:flex-row items-center flex-wrap px-6 py-12">
        <div className="w-full md:w-[67%] lg:w-[40%]">
          <form>
            <label htmlFor="name" className="block ml-1 mb-2">
              Name
            </label>
            <input
              type="text"
              className="mb-6 w-full form-input px-4 py-2 text-gray-700 bg-white translate-x-1 ease-in-out border-gray-300 focus:ring-0 focus:border-[#5769CC] rounded-sm"
              id="text"
              value={name}
              onChange={onChange}
              placeholder="Enter your name"
            />
            <label htmlFor="email" className="block ml-1 mb-2">
              Email address
            </label>
            <input
              type="email"
              className="mb-6 w-full form-input px-4 py-2 text-gray-700 bg-white translate-x-1 ease-in-out border-gray-300 focus:ring-0 focus:border-[#5769CC] rounded-sm"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Enter your email address"
            />
            <label htmlFor="password" className="block ml-1 mb-2">
              Password
            </label>
            <div className="relative mb-6">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full form-input px-4 py-2 text-gray-700 bg-white translate-x-1 ease-in-out border-gray-300 focus:ring-0 focus:border-[#5769CC] rounded-sm"
                id="password"
                value={password}
                onChange={onChange}
                placeholder="Enter your password"
              />
              {showPassword ? (
                <AiOutlineEyeInvisible
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <AiOutlineEye
                  className="absolute right-3 top-3 text-xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div>
            <div className="flex justify-between items-center whitespace-nowrap text-sm ml-1 mb-6">
              <p>
                Already an account?
                <Link
                  to="/sign-in"
                  className="text-red-600 hove:text-red-700 transition-all duration-200 ease-in-out ml-1 font-medium"
                >
                  Login
                </Link>
              </p>
              <p>
                <Link
                  to="/forgot-password"
                  className="text-[#5769CC] hover:text-[#364BC4] font-medium"
                >
                  Forgot Password?
                </Link>
              </p>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-[#5769CC] hover:bg-[#364BC4] text-white px-4 py-2 rounded-sm"
              >
                Register
              </button>
            </div>
            <div className="flex items-center my-4 before:border-t  before:flex-1 before:border-gray-300 after:border-t  after:flex-1 after:border-gray-300">
              <p className="text-center font-medium mx-4">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
        <div className="md:w-[67%] lg:w-[40%] mb-12 md:mb-6 lg:ml-20">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
            alt=""
            className="w-full rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
