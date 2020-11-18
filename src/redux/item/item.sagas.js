import { takeLatest, call, put, all,select } from "redux-saga/effects";
import {
  firestore,
} from "../../firebase/firebase.utils";
import {fetchItemSuccess,fetchItemFailure,checkItemInGallerySuccess,checkItemInGalleryFailure} from "./item.actions"
import {ItemType} from './item.types';
import {selectGallery} from '../anime-track/anime-track.selector'
export function* fetchItemStartAsync({payload:id})
{
    try{
        let item={};
        const collectionRef = yield firestore.collection("collections");
        const itemSnapshot = yield collectionRef.where("mal_id","==",parseInt(id)).get();
        itemSnapshot.forEach((doc)=>{
            item=doc.data();
        })
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

// export function* checkItemInGalleryAsync({payload:id}){
//     try{
//         let gallery = yield select(selectGallery);
//         console.log(gallery);
//         if(gallery[id]!==undefined)
//         {
//             yield put(checkItemInGallerySuccess(true));
//         }
//         else{
//             yield put(checkItemInGallerySuccess(false));
//         }
//     }
//     catch(error)
//     {
//         console.log(error);
//         yield put(checkItemInGalleryFailure(error.message))
//     }
// }

// export function* checkItemInGalleryStart(){
//         yield takeLatest(ItemType.CHECK_ITEM_IN_GALLERY_START,checkItemInGalleryAsync)
// }

export function* itemSagas() {
  yield all([
    call(fetchItemStart)])
}