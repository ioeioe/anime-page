import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  firestore,
  updateItemTime,
  // addCollectionToFireStore,
} from "../../firebase/firebase.utils";

import {

  fetchCollecionPreviewSuccess,
  fetchCollecionOverviewSuccess,
  fetchCollecionViewRankingSuccess,
  fetchCollecionScoreRankingSuccess,
  fetchSearchSuccess,
  fetchCollectionPreviewFailure,
  fetchCollectionOverviewFailure,
  fetchCollectionViewRankingFailure,
  fetchCollectionScoreRankingFailure,
  fetchSearchFailure,


} from "./collection.actions";
import { CollectionType } from "./collection.types";

export function* fetchCollectionPreviewAsync() {
  try {
    const CollectionRef = yield firestore.collection("collections");
    let collectionMap = [];
    const CollectionSnapshot = yield CollectionRef.where("updateTime","<=",new Date).orderBy("updateTime","desc").limit(20).get();
    CollectionSnapshot.docs.forEach((doc)=>{
      collectionMap.push(doc.data());
    })
    yield put(fetchCollecionPreviewSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionPreviewFailure(error.message));
  }
}

export function* fetchCollectionPreviewStart() {
  yield takeLatest(
    CollectionType.FETCH_COLLECTIONS_PREVIEW_START,
    fetchCollectionPreviewAsync
  );
}

export function* fetchCollectionOverviewAsync({payload:types}) {
  try {
    const CollectionRef = yield firestore.collection("collections");
    let collectionMap = [];
    if(types.genres)
    {
    const CollectionSnapshot = yield CollectionRef.where("updateTime","<=",new Date).where("genres","array-contains",types.genres).orderBy("updateTime","desc").limit(40).get();
    CollectionSnapshot.docs.forEach((doc)=>{
      collectionMap.push(doc.data());
    })
  }
  else if(types.type)
  {
      const CollectionSnapshot = yield CollectionRef.where("updateTime","<=",new Date).where("type","==",types.type).orderBy("updateTime","desc").limit(40).get();
      CollectionSnapshot.docs.forEach((doc)=>{
      collectionMap.push(doc.data());
    })
  }
  else if(types.year)
  {
    let year = parseInt(types.year);
      const CollectionSnapshot = yield CollectionRef.where("updateTime","<=",new Date).where("year","==",year).orderBy("updateTime","desc").limit(40).get();
      CollectionSnapshot.docs.forEach((doc)=>{
      collectionMap.push(doc.data());
    })
  }
    else if(types.status)
  {
      let status = null;
      if(types.status=="onGoing")
      {
        status=true;
      }
      else{
        status=false;
      }
      const CollectionSnapshot = yield CollectionRef.where("updateTime","<=",new Date).where("continuing","==",status).orderBy("updateTime","desc").limit(40).get();
      CollectionSnapshot.docs.forEach((doc)=>{
      collectionMap.push(doc.data());
    })
  }
    else if(types.keyword)
  {
      const CollectionSnapshot = yield CollectionRef.where("updateTime","<=",new Date).where("title","array-contains",types.type).orderBy("updateTime","desc").limit(40).get();
      CollectionSnapshot.docs.forEach((doc)=>{
      collectionMap.push(doc.data());
    })
  }
    else if(types.for)
  {
      const CollectionSnapshot = yield CollectionRef.where("updateTime","<=",new Date).orderBy("updateTime","desc").limit(40).get();
      CollectionSnapshot.docs.forEach((doc)=>{
      collectionMap.push(doc.data());
    })
  }
     yield put(fetchCollecionOverviewSuccess(collectionMap));
  } catch (error) {
    console.log(error);
    yield put(fetchCollectionOverviewFailure(error.message));
  }
}

export function* fetchCollectionOverviewStart() {
  yield takeLatest(
    CollectionType.FETCH_COLLECTIONS_OVERVIEW_START,
    fetchCollectionOverviewAsync
  );
}


export function* fetchCollectionViewRankingAsync() {
  try {
    const CollectionRef = yield firestore.collection("collections");
    let collectionMap = [];
    const CollectionSnapshot = yield CollectionRef.where("year","==",2020).where("season","==","fall").orderBy("members","desc").limit(6).get();
    CollectionSnapshot.docs.forEach((doc)=>{
      collectionMap.push(doc.data());
    })
    console.log(collectionMap.length);
    yield put(fetchCollecionViewRankingSuccess(collectionMap));
  } catch (error) {
    console.log(error);
    yield put(fetchCollectionViewRankingFailure(error.message));
  }
}

export function* fetchCollectionViewRankingStart() {
  yield takeLatest(
    CollectionType.FETCH_COLLECTIONS_VIEW_RANKING_START,
    fetchCollectionViewRankingAsync
  );
}

export function* fetchCollectionScoreRankingAsync() {
  try {
    const CollectionRef = yield firestore.collection("collections");
    let collectionMap = [];
    const CollectionSnapshot = yield CollectionRef.where("year","==",2020).where("season","==","fall").orderBy("score","desc").limit(6).get();
    CollectionSnapshot.docs.forEach((doc)=>{
      collectionMap.push(doc.data());
    })
    yield put(fetchCollecionScoreRankingSuccess(collectionMap));
  } catch (error) {
    console.log(error);
    yield put(fetchCollectionScoreRankingFailure(error.message));
  }
}



export function* fetchCollectionScoreRankingStart() {
  yield takeLatest(
    CollectionType.FETCH_COLLECTIONS_SCORE_RANKING_START,
    fetchCollectionScoreRankingAsync
  );
}

export function* fetchSearchStartAsyncs({payload:keyword}){
   try {
    const CollectionRef = yield firestore.collection("collections");
    let collectionMap = [];
    const CollectionSnapshot = yield CollectionRef.where("title","array-contains",keyword).orderBy("updateTime","desc").limit(6).get();
    CollectionSnapshot.docs.forEach((doc)=>{
      collectionMap.push(doc.data());
    })
    yield put(fetchSearchSuccess(collectionMap));
  } catch (error) {
    console.log(error);
    yield put(fetchSearchFailure(error.message));
  }
}

export function* fetchSearchStart(){
  yield takeLatest(
    CollectionType.FETCH_SEARCH_START,
    fetchSearchStartAsyncs,
  )
}

export function* updateTime({payload:id}){
  yield call(updateItemTime,id);
}

export function* updateTimeStart(){
  yield takeLatest(
    CollectionType.UPDATE_TIME,
    updateTime,
  )
}
// export function* pushCollection() {
//   const Collection01 = yield fetch("https://api.jikan.moe/v3/season/2020/fall");
//   const Collection2 = yield fetch(
//     "https://api.jikan.moe/v3/season/2020/summer"
//   );
//   const Collection3 = yield fetch(
//     "https://api.jikan.moe/v3/season/2020/spring"
//   );
//   const Collection4 = yield fetch(
//     "https://api.jikan.moe/v3/season/2019/winter"
//   );
//   const Collection5 = yield fetch("https://api.jikan.moe/v3/season/2019/fall");
//   const Collection6 = yield fetch(
//     "https://api.jikan.moe/v3/season/2019/summer"
//   );
//   const Collection7 = yield fetch(
//     "https://api.jikan.moe/v3/season/2019/spring"
//   );
//   const Collection8 = yield fetch(
//     "https://api.jikan.moe/v3/season/2018/winter"
//   );
//   // const Collection9 = yield fetch("https://api.jikan.moe/v3/season/2018/fall");
//   // const Collection10 = yield fetch(
//   //   "https://api.jikan.moe/v3/season/2018/summer"
//   // );
//   // const Collection11 = yield fetch(
//   //   "https://api.jikan.moe/v3/season/2018/spring"
//   // );
//   // const Collection12 = yield fetch(
//   //   "https://api.jikan.moe/v3/season/2017/winter"
//   // );
//   // const Collection13 = yield fetch("https://api.jikan.moe/v3/season/2017/fall");
//   // const Collection14 = yield fetch(
//   //   "https://api.jikan.moe/v3/season/2017/summer"
//   // );
//   // const Collection15 = yield fetch(
//   //   "https://api.jikan.moe/v3/season/2017/spring"
//   // );
//   // const Collection16 = yield fetch(
//   //   "https://api.jikan.moe/v3/season/2016/winter"
//   // );
//   // const Collection17 = yield fetch("https://api.jikan.moe/v3/season/2016/fall");
//   // const Collection18 = yield fetch(
//   //   "https://api.jikan.moe/v3/season/2016/summer"
//   // );
//   // const Collection19 = yield fetch(
//   //   "https://api.jikan.moe/v3/season/2016/spring"
//   // );

//   const c1 = yield Collection01.json();
//   const c2 = yield Collection2.json();
//   const c3 = yield Collection3.json();
//   const c4 = yield Collection4.json();
//   const c5 = yield Collection5.json();
//   const c6 = yield Collection6.json();
//   const c7 = yield Collection7.json();
//   const c8 = yield Collection8.json();
//   // const c9 = yield Collection9.json();
//   // const c10 = yield Collection10.json();
//   // const c11 = yield Collection11.json();
//   // const c12 = yield Collection12.json();
//   // const c13 = yield Collection13.json();
//   // const c14 = yield Collection14.json();
//   // const c15 = yield Collection15.json();
//   // const c16 = yield Collection16.json();
//   // const c17 = yield Collection17.json();
//   // const c18 = yield Collection18.json();
//   // const c19 = yield Collection19.json();
//     c1.anime.forEach(item => {
//       item.season="fall";
//       item.year=2020;
//     });
//      c2.anime.forEach(item => {
//       item.season="summer";
//       item.year=2020;
//     });
//     c3.anime.forEach(item => {
//       item.season="spring";
//       item.year=2020;
//     });
//     c4.anime.forEach(item => {
//       item.season="winter";
//       item.year=2019;
//     });
//     c5.anime.forEach(item => {
//       item.season="fall";
//       item.year=2019;
//     });
//     c6.anime.forEach(item => {
//       item.season="summer";
//       item.year=2019;
//     });
//     c7.anime.forEach(item => {
//       item.season="spring";
//       item.year=2019;
//     });
//     //   c8.anime.forEach(item => {
//     //   item.season="winter";
//     //   item.year=2018;
//     // });
//         const regex = /\s/gi;
//         const regex2 = /[^A-Za-z0-9]/g;
//   const Collection1 = c1.anime.concat(
//     c2.anime,
//     c3.anime,
//     c4.anime,
//     c5.anime,
//     c6.anime,
//     c7.anime,
//   )

//     //c7.anime
//     //c8.anime
//     // c9.anime,
//     // c10.anime,
//     // c11.anime
//     // c12.anime,
//     // c13.anime,
//     // c14.anime,
//     // c15.anime
//     // c16.anime,
//     // c17.anime,
//     // c18.anime,
//     // c19.anime
  
//   Collection1.forEach(item=>{
//     item.routeName=item.title.toLowerCase().replace(regex2,"").replace(regex,"-");
//     // let datetime = item.airing_start.split('-');
//     // let year = parseInt(datetime[0]);
//     // let month = parseInt(datetime[1]);
//     // let date = parseInt(datetime[2].substr(0,2));
//     // let hour = parseInt(datetime[2].substr(3,2));
//     // let minute = parseInt(datetime[3]);
//     // let second = parseInt(datetime[4]);
//     console.log(item.title.toLowerCase().replace(regex,"-"));
//     console.log(item.title.toLowerCase().replace(regex2,"").replace(regex,"-"));
//     if(item.airing_start)
//     {
//     item.updateTime = new Date(item.airing_start);
//     }
//     else
//     {
//        item.updateTime= new Date(1999,1,1,22,22,22,22);
//     }
//   })
//   //let namesSet = new Set(array.map(item => item.name));
//   let Collectionb = [];
//   let Collection = [];
//   // Collection.push(Collection[0]);
//   for (let i = 0; i < Collection1.length; i++) {
//     if (Collection1[i].r18 == false && Collection1[i].kids == false) {
//       if (Collectionb[Collection1[i].mal_id] === undefined) {
//         Collectionb[Collection1[i].mal_id] = 1;
//         Collection.push(Collection1[i]);
//       }
//     }
//   }
//   console.log(Collection.length);
//   // addCollectionToFireStore("collections", Collection.slice(0,500));
// }
// export function* pushCollectionToStore() {
//   yield takeLatest(CollectionType.PUSH_COLLECTION_TO_STORE, pushCollection);
// }

export function* collectionSagas() {
  yield all([
    call(fetchCollectionPreviewStart),
    call(fetchCollectionOverviewStart),
    call(fetchCollectionViewRankingStart),
    call(fetchCollectionScoreRankingStart),
    call(fetchSearchStart),
    call(updateTimeStart)]);
}
// export function* collectionSagas() {
//   yield all([call(fetchCollectionStart),call(pushCollectionToStore)]);
// }
