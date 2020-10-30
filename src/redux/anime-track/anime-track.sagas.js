import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  firestore,
  //addCollectionToFireStore,
} from "../../firebase/firebase.utils";
import {GetUserTrackingSuccess,GetUserTrackingFailure} from './anime-track.actions';
import {TrackingTypes} from './anime-track.types';

export function* getUserTrackingStart(){
    
}

export function* getTrackingListStart(){
      yield takeLatest(
    TrackingTypes.GET_USER_TRACKING_START,
    getUserTrackingStart
  );
}

export function* trackingSagas() {
  
}
