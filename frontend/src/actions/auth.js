import {
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAIL,
  PASSWORD_RESET_FAIL,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_CONFIRM_FAIL,
  PASSWORD_RESET_CONFIRM_SUCCESS,
  LOGOUT,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  ACTIVATION_SUCCESS,
  ACTIVATION_FAIL,
  GOOGLE_AUTH_SUCCESS,
  GOOGLE_AUTH_FAIL,
} from "./types";
import axios from "axios";

export const accountExists = async (email) => {
  try {
    const response = await axios.get(`/api/check-email-exists/?email=${email}`);
    return response.data.exists;
  } catch (error) {
    throw error;
  }
};

export const accountVerified = async (email) => {
  try {
    const response = await axios.get(
      `/api/check-user-verified/?email=${email}`
    );
    return response.data.exists;
  } catch (error) {
    throw error;
  }
};

export const checkAuthenticated = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    const body = JSON.stringify({ token: localStorage.getItem("access") });
    await axios
      .post(`${process.env.REACT_APP_API_URL}/auth/jwt/verify/`, body, config)
      .then((response) => {
        response.data.code !== "token_not_valid"
          ? dispatch({
              type: AUTHENTICATED_SUCCESS,
            })
          : dispatch({
              type: AUTHENTICATED_FAIL,
            });
      })
      .catch((error) => {
        dispatch({
          type: AUTHENTICATED_FAIL,
          error: error,
        });
      });
  } else {
    dispatch({ type: AUTHENTICATED_FAIL });
  }
};

export const load_user = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    await axios
      .get(`${process.env.REACT_APP_API_URL}/auth/users/me/`, config)
      .then((response) => {
        dispatch({
          type: USER_LOADED_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: USER_LOADED_FAIL,
          error: error,
        });
      });
  } else {
    dispatch({
      type: USER_LOADED_FAIL,
    });
  }
};

export const googleAuth = (state, code) => async (dispatch) => {
  if (state && code && !localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    const details = { state: state, code: code };
    const body = Object.keys(details)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(details[key])
      )
      .join("&");
    await axios
      .post(
        `${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?${body}`,
        config
      )
      .then((response) => {
        dispatch({
          type: GOOGLE_AUTH_SUCCESS,
          payload: response.data,
        });
        dispatch(load_user());
      })
      .catch((error) => {
        dispatch({
          type: GOOGLE_AUTH_FAIL,
          payload: { error: error },
        });
      });
  }
};

export const signin = (email, password) => async (dispatch) => {
  const isRegistered = await accountExists(email);
  if (isRegistered) {
    const isVerified = await accountVerified(email);
    if (isVerified) {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify({ email, password });

      await axios
        .post(`${process.env.REACT_APP_API_URL}/auth/jwt/create/`, body, config)
        .then((response) => {
          dispatch({
            type: SIGNIN_SUCCESS,
            payload: response.data,
          });
          dispatch(load_user());
        })
        .catch((error) => {
          dispatch({
            type: SIGNIN_FAIL,
            payload: {
              error:
                error.response.status === 401
                  ? "Wrong password."
                  : "An error occured. Please try again.",
            },
          });
        });
    } else {
      dispatch({
        type: SIGNIN_FAIL,
        payload: {
          error:
            "Your email address is not verified. Please follow the link sent to your email adress to verify your account.",
        },
      });
    }
  } else {
    dispatch({
      type: SIGNIN_FAIL,
      payload: {
        error: "You do not have an account. Sign up instead.",
      },
    });
  }
};

export const signup =
  (email, password, re_password, first_name, last_name) => async (dispatch) => {
    const isRegistered = await accountExists(email);
    if (!isRegistered) {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify({
        email,
        password,
        re_password,
        first_name,
        last_name,
      });

      await axios
        .post(`${process.env.REACT_APP_API_URL}/auth/users/`, body, config)
        .then((response) => {
          dispatch({
            type: SIGNUP_SUCCESS,
            payload: response.data,
          });
          dispatch(load_user());
        })
        .catch((error) => {
          dispatch({
            type: SIGNUP_FAIL,
            payload: {
              error: "An error occured. Please try again.",
            },
          });
        });
    } else {
      dispatch({
        type: SIGNUP_FAIL,
        payload: {
          error: "You already have an account. Sign in instead.",
        },
      });
    }
  };

export const verify = (uid, token) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ uid, token });

  await axios
    .post(
      `${process.env.REACT_APP_API_URL}/auth/users/activation/`,
      body,
      config
    )
    .then((response) => {
      dispatch({
        type: ACTIVATION_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: ACTIVATION_FAIL,
        payload: error,
      });
    });
};

export const reset_password = (email) => async (dispatch) => {
  const isRegistered = await accountExists(email);
  if (isRegistered) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ email });

    await axios
      .post(
        `${process.env.REACT_APP_API_URL}/auth/users/reset_password/`,
        body,
        config
      )
      .then(() => {
        dispatch({ type: PASSWORD_RESET_SUCCESS });
      })
      .catch(() => {
        dispatch({ type: PASSWORD_RESET_FAIL });
      });
  } else {
    dispatch({
      type: PASSWORD_RESET_FAIL,
      payload: {
        error: "You do not have an account. Sign up instead.",
      },
    });
  }
};

export const reset_password_confirm =
  (uid, token, new_password, re_new_password) => async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ uid, token, new_password, re_new_password });

    await axios
      .post(
        `${process.env.REACT_APP_API_URL}/auth/users/reset_password_confirm/`,
        body,
        config
      )
      .then(() => {
        dispatch({ type: PASSWORD_RESET_CONFIRM_SUCCESS });
      })
      .catch((error) => {
        dispatch({
          type: PASSWORD_RESET_CONFIRM_FAIL,
          payload: {
            error:
              error.response.status === 400
                ? "Your reset link is not valid. Please request another link."
                : "An error occured please try again.",
          },
        });
      });
  };

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
};
