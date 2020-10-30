import { UserTypes } from "./user.types";

export const SignUpStart = (userCredential) => ({
  type: UserTypes.SIGN_UP_START,
  payload: userCredential,
});

export const SignUpSuccess = (userNameAndPassword) => ({
  type: UserTypes.SIGN_UP_SUCCESS,
  payload: userNameAndPassword,
});

export const SignUpFailure = (error) => ({
  type: UserTypes.SIGN_UP_FAILURE,
  payload: error,
});

export const EmailSignInStart = (userCredential) => ({
  type: UserTypes.EMAIL_SIGN_IN_START,
  payload: userCredential,
});

export const GoogleSignInStart = () => ({
  type: UserTypes.GOOGLE_SIGN_IN_START,
});

export const SignInSuccess = (user) => ({
  type: UserTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const SignInFailure = (error) => ({
  type: UserTypes.SIGN_IN_FAILURE,
  payload: error,
});

export const SignOutStart = () => ({
  type: UserTypes.SIGN_OUT_START,
});

export const SignOutSuccess = () => ({
  type: UserTypes.SIGN_OUT_SUCCESS,
});

export const SignOutFailure = (error) => ({
  type: UserTypes.SIGN_UP_FAILURE,
  payload: error,
});

export const CheckUserSession = () => ({
  type: UserTypes.CHECK_USER_SESSION,
});
