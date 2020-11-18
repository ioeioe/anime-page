import { takeLatest, call, put, all,select,fork } from "redux-saga/effects";
import {
  getUserGallery,
  addItemToGallery,
  removeItemFromGallery,
} from "../../firebase/firebase.utils";
import {getUserGallerySuccess,getUserGalleryFailure} from './anime-track.actions';
import {UserTypes} from '../user/user.types';
import {TrackingTypes} from './anime-track.types';
import {selectCurrentUser} from '../user/user.selector';

export function* getUserGalleryStart({payload:userCredential}){
    try{
        let id = userCredential.id;
         yield call(getUserGallery,id);
       
    }
    catch(error){
        yield put(getUserGalleryFailure(error.message));
    }
}


export function* getGalleryStart(){
      yield takeLatest(
    UserTypes.SIGN_IN_SUCCESS,
    getUserGalleryStart
  );
}
export function* addItemToGalleryAsync({payload:item}){
  try{
      let userAuth = yield select(selectCurrentUser);
      yield call(addItemToGallery,userAuth,item);
  }
  catch(error)
  {
    console.log(error);
  }
}
export function* addItemToGalleryStart(){
  yield takeLatest(
    TrackingTypes.ADD_ITEM_TO_GALLERY,
    addItemToGalleryAsync
  ) 
}

export function* removeItemFromGalleryAsync({payload:item}){
   try{
      let userAuth = yield select(selectCurrentUser);
      yield call(removeItemFromGallery,userAuth,item);
    }
    catch(error)
    {
      console.log(error);
    }
}
export function* removeItemFromGalleryStart(){
  yield takeLatest(
    TrackingTypes.REMOVE_ITEM_FROM_GALLERY,
    removeItemFromGalleryAsync
  ) 
}

export function* trackingSagas() {
    yield all([
    call(getGalleryStart),call(addItemToGalleryStart),call(removeItemFromGalleryStart)]); 
}
