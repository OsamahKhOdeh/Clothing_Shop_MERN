import { loginFailure, loginStart, loginSuccess, logoutStart, logoutSuccess, logoutFailure, registerStart, registerSuccess, registerFailure } from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    console.log(user);
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    console.log("login failed", err);
    dispatch(loginFailure());
  }
};

export const logout = async (dispatch) => {
  dispatch(logoutStart());
  try {
    dispatch(logoutSuccess());
  } catch (err) {
    console.log("login failed", err);
    dispatch(logoutFailure());
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    console.log(user);
    const res = await publicRequest.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    console.log("login failed", err);
    dispatch(registerFailure());
  }
};
