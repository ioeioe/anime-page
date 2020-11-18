import { takeLatest, call, put, all,select } from "redux-saga/effects";
import {
    GetAnimeComments
} from "../../firebase/firebase.utils";
import {fetchCommentSuccess,fetchCommentFailure} from './comment.actions';

import {CommentTypes} from './comment.types';


export function* fetchCommentAsync({payload:mal_id}){
    try{
        console.log(mal_id);
        let Comments = yield call(GetAnimeComments,mal_id);
        // yield put(fetchCommentSuccess(Comments));
    }
    catch(error){
        yield put(fetchCommentFailure(error.message));
    }
}

export function* fetchCommentStart(){
      yield takeLatest(
    CommentTypes.FETCH_COMMENTS_START,
    fetchCommentAsync
  );
}


export function* commentSagas() {
    yield all([
    call(fetchCommentStart)]); 
}
