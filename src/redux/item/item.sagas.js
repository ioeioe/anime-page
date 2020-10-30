import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  firestore,
} from "../../firebase/firebase.utils";
import {fetchItemSuccess,fetchItemFailure} from "./item.actions"
import {ItemType} from './item.types';

export function* fetchItemStartAsync({payload:id})
{
    try{
        let item={};
        const collectionRef = yield firestore.collection("collections");
        const itemSnapshot = yield collectionRef.where("mal_id","==",id).get();
        item=itemSnapshot[0].data();
        yield put(fetchItemSuccess(item));
    }
    catch(err)
    {
        yield put(fetchItemFailure(err.message));
    }
}

export function* fetchItemStart(){
    yield takeLatest(ItemType.FETCH_ITEM_START,fetchItemStartAsync)
}

export function* itemSagas() {
  yield all([
    call(fetchItemStart)])
}