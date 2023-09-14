import { reset_password_confirm } from "../actions/auth";
import { useNavigate, useParams } from "react-router-dom";
import React, { useState } from "react";
import { connect, useSelector } from "react-redux";

const ResetPasswordConfirm = ({ reset_password_confirm }) => {
  const error = useSelector((state) => state.auth.error);
  const navigate = useNavigate();
  const { uid, token } = useParams();
  const [passError, setPassErr] = useState("");
  const [formData, setFormData] = useState({
    new_password: "",
    re_new_password: "",
  });

  const { new_password, re_new_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (new_password === re_new_password) {
      setPassErr("");
      reset_password_confirm(uid, token, new_password, re_new_password);
      error === null && navigate("/", { replace: true });
    } else {
      setPassErr("Your passwords do not match");
    }
  };

  return (
    <div className="relative flex flex-col justify-center overflow-hidden p-4">
      <div className="w-full p-6 m-auto bg-white rounded-md sm:max-w-lg flex flex-col space-y-5">
        <form className="space-y-6" onSubmit={(e) => onSubmit(e)}>
          <div className="flex p-0">
            <a
              href
              className="btn btn-md rounded-none btn-ghost normal-case text-xl font-bold text-center flex-1 hover:bg-white"
            >
              Change password
            </a>
          </div>
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              New Password
            </label>
            <input
              required
              type="password"
              name="new_password"
              value={new_password}
              autoComplete="off"
              onChange={(e) => onChange(e)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="••••••••"
            />
          </div>
          <div>
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirm New Password
            </label>
            <input
              required
              type="password"
              name="re_new_password"
              value={re_new_password}
              onChange={(e) => onChange(e)}
              minLength={6}
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            />
            {passError && (
              <label className="label-text-alt text-red-500">{passError}</label>
            )}
          </div>
          {error && (
            <label className="label-text-alt text-red-500">{error}</label>
          )}
          <button type="submit" className="btn btn-square w-full">
            Save
          </button>
        </form>
        <a
          href="/signin"
          className="text-sm text-blue-700 hover:underline dark:text-blue-500"
        >
          Remembered your password? Sign in instead
        </a>
      </div>
    </div>
  );
};

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);
