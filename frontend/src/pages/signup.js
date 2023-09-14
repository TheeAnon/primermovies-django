import React, { useState } from "react";
import { signup } from "../actions/auth";
import { connect, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import googleLogo from "../images/google.png";
import fbLogo from "../images/fb.png";

const Signup = ({ signup, isAuthenticated }) => {
  const signup_error = useSelector((state) => state.auth.error);
  const [signupEmailErr, setSignupEmailErr] = useState("");
  const [signupPassErr, setSignupPassErr] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    re_password: "",
  });

  const { name, email, password, re_password } = formData;

  const toTitleCase = (str) => {
    return str.replace(/\b\w+/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[A-Z]).{6,}$/;

    if (emailRegex.test(email.trim())) {
      if (passwordRegex.test(password)) {
        if (password === re_password) {
          signup(email, password, re_password, toTitleCase(name));
          setSignupPassErr("");
        } else {
          setSignupPassErr("Your passwords do not match");
        }
      } else {
        setSignupPassErr(
          "Password must be at least 6 characters long and contain at least one number and one uppercase letter."
        );
      }
    } else {
      setSignupEmailErr("Please enter a valid email address.");
    }
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
                href="/signin"
                className="btn btn-md rounded-none btn-ghost normal-case text-xl font-bold text-center flex-1 hover:bg-white"
              >
                Sign in
              </a>
              <a
                href
                className="btn btn-md btn-ghost normal-case text-xl font-bold text-center flex-1 text-rose-500 hover:bg-white"
              >
                Sign up
              </a>
            </div>
            <div className="flex flex-row-reverse">
              <progress className="progress w-1/2 h-1" value={50} />
            </div>
          </div>
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              minLength={4}
              onChange={(e) => onChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Japhe"
              required
            />
          </div>
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => onChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
            />
            <label className="label-text-alt text-red-500">
              {signupEmailErr}
            </label>
          </div>
          <div>
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              minLength={6}
              value={password}
              onChange={(e) => onChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div>
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="re_password"
              id="password"
              value={re_password}
              onChange={(e) => onChange(e)}
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
            <label className="label-text-alt text-red-500">
              {signupPassErr}
            </label>
          </div>
          {signup_error && (
            <label className="label-text-alt text-red-500">
              {signup_error}
            </label>
          )}
          <button href type="submit" className="btn btn-square w-full">
            Sign up
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

export default connect(mapStateToProps, { signup })(Signup);
