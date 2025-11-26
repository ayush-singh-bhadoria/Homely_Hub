// src/store/User/user-action.js
import { userActions } from "./user-slice";
import { axiosInstance } from "../../utils/axios";

// helper to safely get error message
const getErrorMessage = (error) =>
  error?.response?.data?.message || error.message || "Something went wrong";

export const getSignup = (user) => async (dispatch) => {
  try {
    dispatch(userActions.getSignupRequest());
    const { data } = await axiosInstance.post("/v1/rent/user/signup", user);
    dispatch(userActions.getSignupDetails(data.user));
  } catch (error) {
    dispatch(userActions.getError(getErrorMessage(error)));
  }
};

export const getLogin = (user) => async (dispatch) => {
  try {
    dispatch(userActions.getLoginRequest());
    const { data } = await axiosInstance.post("/v1/rent/user/login", user);
    dispatch(userActions.getLoginDetails(data.user));
  } catch (error) {
    dispatch(userActions.getError(getErrorMessage(error)));
  }
};

// no need to accept `user` arg here
export const currentUser = () => async (dispatch) => {
  try {
    dispatch(userActions.getCurrentUserRequest());
    const { data } = await axiosInstance.get("/v1/rent/user/me");
    dispatch(userActions.getCurrentUser(data.user));
  } catch (error) {
    dispatch(userActions.getError(getErrorMessage(error)));
  }
};

export const updateUser = (updateUserData) => async (dispatch) => {
  try {
    dispatch(userActions.getUpdateUserRequest());
    const response = await axiosInstance.patch(
      "/v1/rent/user/updateMe",
      updateUserData
    );
    console.log("Update successful:", response.data);

    // assuming backend returns updated user as response.data.user
    dispatch(userActions.getCurrentUser(response.data.user));
  } catch (error) {
    dispatch(userActions.getError(getErrorMessage(error)));
  }
};

export const forgotPassword = (email) => async (dispatch) => {
  try {
    await axiosInstance.post("/v1/rent/user/forgotPassword", { email });
  } catch (error) {
    dispatch(userActions.getError(getErrorMessage(error)));
  }
};

export const resetPassword = (repassword, token) => async (dispatch) => {
  try {
    await axiosInstance.patch(
      `/v1/rent/user/resetPassword/${token}`,
      repassword
    );
    // you might want to auto-login or redirect after this
  } catch (error) {
    dispatch(userActions.getError(getErrorMessage(error)));
  }
};

// ⚠️ guessing the endpoint here – adjust to your backend
export const updatePassword = (passwords) => async (dispatch) => {
  try {
    dispatch(userActions.getPasswordRequest());
    await axiosInstance.patch("/v1/rent/user/updateMyPassword", passwords);
    dispatch(userActions.getPasswordSuccess(true));
  } catch (error) {
    dispatch(userActions.getError(getErrorMessage(error)));
  }
};

export const logOut = () => async (dispatch) => {
  try {
    await axiosInstance.get("/v1/rent/user/logOut");
    dispatch(userActions.getLogout(null));
  } catch (error) {
    dispatch(userActions.getError(getErrorMessage(error)));
  }
};
