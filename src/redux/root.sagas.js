import { all, call } from "redux-saga/effects";
import { collectionSagas } from "./collection/collection.sagas";
import { searchSagas } from "./search/search.sagas";
import { userSagas } from "./user/user.sagas";
import {trackingSagas} from './anime-track/anime-track.sagas';
import {itemSagas} from './item/item.sagas';
import {commentSagas} from './comment/comment.sagas'; 
export default function* rootSaga() {
  yield all([call(collectionSagas), call(userSagas),call(trackingSagas),call(itemSagas),call(commentSagas)]);
}
