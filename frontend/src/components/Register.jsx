import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-400">
      <div className="absolute z-0 hidden transform rotate-45 bg-purple-300 w-60 h-60 rounded-xl -top-5 -left-16 md:block"></div>
      <div className="absolute hidden w-48 h-48 transform bg-purple-300 rounded-xl -bottom-6 -right-10 rotate-12 md:block"></div>
      <div className="z-20 px-12 py-12 bg-white shadow-xl rounded-2xl">
        <div>
          <h1 className="mb-4 text-3xl font-bold text-center cursor-pointer">
            Create An Account
          </h1>
          <p className="mb-8 text-sm font-semibold tracking-wide text-center text-gray-700 cursor-pointer w-80">
            Create an account to enjoy all the services without any ads for
            free!
          </p>
        </div>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="block w-full px-4 py-3 text-sm border-4 border-double rounded-lg outline-none focus:border-purple-800"
          />
          <input
            type="text"
            placeholder="Email Address"
            className="block w-full px-4 py-3 text-sm border-4 border-double rounded-lg outline-none focus:border-purple-800"
          />
          <input
            type="text"
            placeholder="Password"
            className="block w-full px-4 py-3 text-sm border-4 border-double rounded-lg outline-none focus:border-purple-800"
          />
        </div>
        <div className="mt-6 text-center">
          <button className="w-64 py-3 text-xl text-white transition-colors duration-200 bg-purple-500 hover:bg-purple-600 rounded-2xl">
            Create Account
          </button>
          <p className="mt-4 text-sm">
            Already Have An Account?{" "}
            <Link to="/login">
              <span className="font-semibold text-purple-700 underline cursor-pointer hover:text-purple-500">
                {" "}
                Login
              </span>
            </Link>
          </p>
        </div>
      </div>
      <div className="absolute top-0 hidden w-40 h-40 bg-purple-300 rounded-full right-12 md:block" />
      <div className="absolute hidden w-20 h-40 transform rotate-45 bg-purple-300 rounded-full bottom-20 left-10 md:block"></div>
    </div>
  );
}

export default Register;
