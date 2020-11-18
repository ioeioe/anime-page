import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import CollectionReducer from "./collection/collection.reducer";
import DirectoryReducer from "./directory/directory.reducer";
import SearchReducer from "./search/search.reducer";
import UserReducer from "./user/user.reducer";
import AccountReducer from "./account/account.reducer";
import AnnounceReducer from "./announce/announce.reducer";
import TrackingReducer from './anime-track/anime-track.reducer';
import ItemReducer from './item/item.reducer';
import CommentReducer from './comment/comment.reducer';
const persistConfig = {
  key: "root",
  storage,
  blacklist:"collection",
};
const rootReducer = combineReducers({
  collection: CollectionReducer,
  directory: DirectoryReducer,
  search: SearchReducer,
  user: UserReducer,
  account: AccountReducer,
  announce: AnnounceReducer,
  tracking:TrackingReducer,
  item:ItemReducer,
  comment:CommentReducer,
});

export default persistReducer(persistConfig, rootReducer);
