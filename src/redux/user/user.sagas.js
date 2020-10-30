import { takeLatest, call, put, all } from "redux-saga/effects";
import store from '../store';
import {
  createUserProfileDocument,
  auth,
  PopupGoogleSignIn,
  getCurrentUser,
  upLoadImageTask
} from "../../firebase/firebase.utils";

import { UserTypes } from "./user.types";

import {
  SignUpSuccess,
  SignUpFailure,
  EmailSignInStart,
  SignInSuccess,
  SignInFailure,
  SignOutSuccess,
  SignOutFailure,
} from "./user.actions";



export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    console.log(userAuth);
    if (!userAuth) {
      return;
    }
    yield call(getSnapShotFromUserAuth,userAuth);
  } catch (error) {
    yield put(SignInFailure(error.message));
  }
}

export function* checkUserSession() {
  yield takeLatest(UserTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* getSnapShotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const snapShot = yield userRef.get();
    console.log(snapShot.data());
    yield put(SignInSuccess({ id: snapShot.id, ...snapShot.data() }));
  } catch (error) {
    //"Tên đăng nhập hoặc mật khẩu không chính xác";
    yield put(SignInFailure(error.message));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield PopupGoogleSignIn();
    yield getSnapShotFromUserAuth(user);
  } catch (error) {
    console.log(error);
    yield alert(error.message);
    yield put(SignInFailure(error.message));
  
  }
}

export function* googleSignInStart() {
  yield takeLatest(UserTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signInWithEmail({ payload: { username, password } }) {
  try {
    const email = username + "@gmail.com";
    console.log(email);
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapShotFromUserAuth(user);
  } catch (error) {
    //"Tên đăng nhập hoặc mật khẩu không chính xác"
    if(error.code==="auth/wrong-password")
    {
    yield alert(error.message);
    }
    yield put(SignInFailure(error.message));
  }
}

export function* emailSignInStart() {
  yield takeLatest(UserTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* signUp({ payload: { firstName,lastName,userName, password, imageAsFile } }) {
  try {
    console.log(password);
    const email = userName + "@gmail.com";
    const { user } = yield auth.createUserWithEmailAndPassword(
      email,
      password
    );
    const userId=user.uid;
    let imageUrl="";
    //  yield createUserProfileDocument(user, 
    //  { firstName,lastName,imageUrl },);
    // if(imageAsFile!==''){
    //    yield upLoadImageTask(imageAsFile,userId,userName,password);
    // }
    if(imageAsFile!==''){
       imageUrl = yield call(upLoadImageTask,imageAsFile,userId,userName,password);
    }
    yield call(createUserProfileDocument,user,{firstName,lastName,imageUrl})
    yield put(EmailSignInStart({username:userName,password}));
    // setTimeout(()=>{
        
    // })
    //  yield put(EmailSignInStart({ username:userName,password  })); 
  } catch (error) {
    yield put(SignUpFailure(error.message));
    throw(error);
  }
}

export function* onSignUpStart() {
  yield takeLatest(UserTypes.SIGN_UP_START, signUp);
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(SignOutSuccess());
  } catch (error) {
    yield put(SignOutFailure(error.message));
  }
}
export function* onSignOutStart() {
  yield takeLatest(UserTypes.SIGN_OUT_START, signOut);
}

export function* userSagas() {
  yield all([
    call(emailSignInStart),
    call(googleSignInStart),
    call(onSignUpStart),
    call(onSignOutStart),
    call(checkUserSession),
    
  ]);
}
