import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { IoWarningOutline } from "react-icons/io5";

import { loginUser } from "../redux/users";
import Spinner from "../components/Spinner";
import Layout from "../components/Layout";

function Login(props) {
  const dispatch = useDispatch();
  const initialState = {
    email: "",
    password: "",
  };

  const [user, setUser] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [displayInfo, setDisplayInfo] = useState("");

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setIsLoading(true);

    if (displayInfo) setDisplayInfo("");

    dispatch(loginUser(user))
      .unwrap()
      .then((data) => {
        if (data) props.history.push("/");
      })
      .catch((error) => {
        setIsLoading(false);
        setDisplayInfo(error.msg);
      });
  };

  return (
    <Layout itemsCenter>
      <form
        onSubmit={handleLogin}
        className="relative z-20 px-8 py-12 bg-white shadow-xl sm:px-12 rounded-2xl"
      >
        <div>
          <h1 className="mb-4 text-3xl font-bold text-center cursor-pointer">
            Login to Notes
          </h1>
          <p className="mb-8 text-sm font-semibold tracking-wide text-center text-gray-700 cursor-pointer w-80">
            Get access to your favourite notes editor!
          </p>
        </div>
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="block w-full px-4 py-3 text-sm border-4 border-double rounded-lg outline-none focus:border-purple-800"
            name="email"
            value={user.email}
            onChange={onChangeInput}
          />
          <input
            type="password"
            placeholder="Password"
            className="block w-full px-4 py-3 text-sm border-4 border-double rounded-lg outline-none focus:border-purple-800"
            name="password"
            value={user.password}
            onChange={onChangeInput}
          />
        </div>
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="relative w-64 py-3 text-xl text-white transition-colors duration-200 bg-purple-500 hover:bg-purple-600 rounded-2xl"
          >
            Login
            {isLoading && (
              <span className="absolute top-4 right-20">
                <Spinner />
              </span>
            )}
          </button>
          <p className="mt-4 text-sm">
            Don't Have An Account?{" "}
            <Link to="/register">
              <span className="font-semibold text-purple-700 underline cursor-pointer hover:text-purple-500">
                {" "}
                Register
              </span>
            </Link>
          </p>
        </div>
        {displayInfo && (
          <p className="absolute left-0 right-0 flex justify-center items-center p-2 transition-colors duration-300 bg-purple-200 rounded-md -bottom-6 ">
            <span className="mx-2 text-red-800">
              <IoWarningOutline className="text-3xl" />
            </span>
            <span className="text-red-900">{displayInfo}</span>
          </p>
        )}
      </form>
    </Layout>
  );
}

export default Login;
