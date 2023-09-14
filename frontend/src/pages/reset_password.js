import { reset_password } from "../actions/auth";
import { connect, useSelector } from "react-redux";
import React, { useState } from "react";

const ResetPassword = ({ reset_password }) => {
  const error = useSelector((state) => state.auth.error);
  console.log(error);
  const [formData, setFormData] = useState({
    email: "",
  });
  const [requestSent, setRequestSent] = useState(false);

  const { email } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    reset_password(email);
    error === null && setRequestSent(true);
  };

  return (
    <div className="relative flex flex-col justify-center overflow-hidden p-4">
      <div className="w-full p-6 m-auto bg-white rounded-md sm:max-w-lg">
        {requestSent ? (
          <div className="flex flex-col space-y-5">
            <a
              href
              className="btn btn-md rounded-none btn-ghost normal-case text-xl font-bold text-center flex-1 hover:bg-white"
            >
              Password reset link has been sent to your email account. Followthe
              link to change your password.
            </a>
            <a
              href="/"
              className="btn btn-md normal-case text-xl font-bold text-center flex-1 hover:bg-white"
            >
              Go back home
            </a>
          </div>
        ) : (
          <div className="flex flex-col space-y-5">
            <form className="space-y-6" onSubmit={(e) => onSubmit(e)}>
              <div className="flex p-0">
                <a
                  href
                  className="btn btn-md rounded-none btn-ghost normal-case text-xl font-bold text-center flex-1 hover:bg-white"
                >
                  Enter email address to receive password reset link
                </a>
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
              {error && (
                <label className="label-text-alt text-red-500">{error}</label>
              )}
              <button type="submit" className="btn btn-square w-full">
                Send link
              </button>
            </form>
            <a
              href="/signup"
              className="text-sm text-blue-700 hover:underline dark:text-blue-500"
            >
              Don't have an account? Sign up
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default connect(null, { reset_password })(ResetPassword);
