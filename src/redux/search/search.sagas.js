// import { takeLatest, call, put, all } from "redux-saga/effects";
// import { SearchType } from "./search.types";

// import { DropDownSuccess, DropDownFailure } from "./search.actions";
// import { selectSearchCollecion } from "../collection/collection.selector";
// export function* DropDownAsync(search) {
//   try {
//     console.log(search);
//     const searchCollection = yield selectSearchCollecion(search);
//     yield put(DropDownSuccess(searchCollection));
//   } catch (error) {
//     yield put(DropDownFailure(error.message));
//   }
// }

// export function* DropDownStart() {
//   yield takeLatest(SearchType.DROP_DOWN_START, DropDownAsync);
// }

// export function* searchSagas() {
//   yield all([call(DropDownStart)]);
// }
