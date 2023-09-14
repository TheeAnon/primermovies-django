import React, { useState } from "react";
import { connect, useSelector } from "react-redux";
import googleLogo from "../images/google.png";
import fbLogo from "../images/fb.png";
import { signin } from "../actions/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = ({ signin, isAuthenticated }) => {
  const error = useSelector((state) => state.auth.error);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: true,
  });

  const { email, password, remember } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    signin(email, password);
  };

  const continueWithGoogle = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=http://127.0.0.1:8000`
      )
      .then((response) => {
        window.location.replace(response.data.authorization_url);
      })
      .catch((google_error) => {});
  };

  const navigate = useNavigate();
  if (isAuthenticated) {
    navigate("/", { replace: true });
  }

  return (
    <div className="relative flex flex-col justify-center overflow-hidden p-4">
      <div className="w-full p-6 m-auto bg-white rounded-md sm:max-w-lg">
        <form className="space-y-6" onSubmit={(e) => onSubmit(e)}>
          <div className="flex flex-col mb-2">
            <div className="flex p-0">
              <a
                href
                className="btn btn-md rounded-none btn-ghost normal-case text-xl font-bold text-center flex-1 hover:bg-white"
              >
                Sign in
              </a>
              <a
                href="/signup"
                className="btn btn-md btn-ghost normal-case text-xl font-bold text-center flex-1 text-rose-500 hover:bg-white"
              >
                Sign up
              </a>
            </div>
            <progress className="progress w-1/2 h-1" value={50} />
          </div>
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              value={email}
              autoComplete="off"
              onChange={(e) => onChange(e)}
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@gmail.com"
            />
          </div>
          <div>
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              required
              type="password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              minLength={6}
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
          {error && (
            <label className="label-text-alt text-red-500">{error}</label>
          )}
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => onChange(e)}
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                />
              </div>
              <label
                for="remember"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
            <a
              href="/reset-password"
              className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
            >
              Forgot Password?
            </a>
          </div>
          <button type="submit" className="btn btn-square w-full">
            Sign In
          </button>
        </form>
        <div className="divider">or continue with</div>
        <div className="flex mt-3 w-full">
          <div className="m-auto space-x-2">
            <button
              className="btn btn-square btn-outline p-1"
              onClick={continueWithGoogle}
            >
              <img src={googleLogo} alt="google" width={20} height={20} />
            </button>
            <button className="btn btn-square btn-outline p-1">
              <img src={fbLogo} alt="google" width={25} height={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { signin })(Signin);
