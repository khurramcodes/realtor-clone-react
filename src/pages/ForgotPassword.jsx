import React, { useState } from "react";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  function onChange(e) {
    setEmail(e.target.value);
  }

  return (
    <section>
      <div className="text-center">
        <h1 className="text-3xl mt-6 font-normal px-6 pt-12 pb-2 max-w-6xl mx-auto">
          Forgot Password
        </h1>
        <p className="pb-8">
          Enter your email address so we can find your account.
        </p>
      </div>
      <div className="flex justify-center flex-col-reverse md:flex-row items-center flex-wrap px-6 py-12">
        <div className="w-full md:w-[67%] lg:w-[40%]">
          <form>
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
            <div className="flex justify-between items-center whitespace-nowrap text-sm ml-1 mb-6">
              <p>
                Don't have an account?
                <Link
                  to="/sign-up"
                  className="text-red-600 hove:text-red-700 transition-all duration-200 ease-in-out ml-1 font-medium"
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  to="/sign-in"
                  className="text-[#5769CC] hover:text-[#364BC4] font-medium"
                >
                  Go Back
                </Link>
              </p>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-[#5769CC] hover:bg-[#364BC4] text-white px-4 py-2 rounded-sm"
              >
                Send Reset Password Email
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

export default ForgotPassword;
