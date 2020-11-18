import 'firesql/rx';
import { takeLatest, call , put, all,select, take } from "redux-saga/effects";
import {
  firestore,
  fireSql,
  updateItemTime,
  updateItemBackground,
  addCollectionToFireStore,
} from "../../firebase/firebase.utils";

import {

  fetchCollecionPreviewSuccess,
  fetchCollecionOverviewSuccess,
  fetchViewRatingSuccess,
  fetchScoreRatingSuccess,
  fetchSearchSuccess,
  fetchIncomingSuccess,

  fetchCollectionPreviewFailure,
  fetchCollectionOverviewFailure,
  fetchViewRatingFailure,
  fetchScoreRatingFailure,
  fetchSearchFailure,
  fetchIncomingFailure,


} from "./collection.actions";
import { CollectionType } from "./collection.types";
import {selectPreviousPage,selectFirstDocument,selectLastDocument} from './collection.selector';

export function* fetchCollectionPreviewAsync() {
  try {
    const CollectionRef = yield firestore.collection("collections");
    //  const CollectionSnapshot = yield CollectionRef.where("year","==",2020).where("season","==","fall").get();
    //  console.log(CollectionSnapshot.docs.length);
    const CollectionSnapshot = yield CollectionRef.where("updateTime","<=",new Date()).orderBy("updateTime","desc").limit(20).get();
   let collectionMap = [];
    CollectionSnapshot.docs.forEach((doc)=>{
      let item=doc.data();
      collectionMap.push(item);
    })

      //  const ref = yield CollectionRef.where("updateTime","<=",new Date()).orderBy("updateTime","desc").limit(20);
      // const channel = eventChanel(emit=>ref.onSnapshot(emit))
      // const data = yield take(channel);
      // yield put(fetchCollecionPreviewSuccess(data));
    
    // console.log(collectionMap);
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
function getMonthSeasonAndYear()
{
    let date= new Date();
    let month=date.getMonth();
    let year = date.getFullYear();
    let season="";
    let nextSeason="";
    let nextSeasonYear=year;
     if(month===10||month===11||month===12)
      {
        season="fall";
        nextSeason="winter";
        nextSeasonYear=year+1;
      }
      else if(month===7||month===8||month===9)
      {
        season="summer";
        nextSeason="fall";
      }
      else if(month===4||month===5||month===6)
      {
        season="spring";
        nextSeason="summer";
      }
      else if(month===1||month===2||month===3)
      {
        season="winter";
        nextSeason="spring";
      }
      console.log("asdasda");
       console.log(month,season,year,nextSeason,nextSeasonYear);
      return {month,season,year,nextSeason,nextSeasonYear};
}
export function* fetchCollectionOverviewAsync({payload:types}) {
  try {
    let previousPage = yield select(selectPreviousPage);
    let collectionMap = [];
    let firstDocument = null;
    let lastDocument = null;
    let prePage=0;
    let CollectionSnapshot=null;
    let CollectionRef = yield firestore.collection("collections");
    let {month,season,year}=getMonthSeasonAndYear();
    if(types.pageNumber===1)
    {
    if(types.genres)
    {
     CollectionSnapshot = yield CollectionRef.where("updateTime","<=",new Date()).where("genres","array-contains",types.genres).orderBy("updateTime","desc").limit(40).get();
  }
  else if(types.type)
  {
        CollectionSnapshot = yield CollectionRef.where("updateTime","<=",new Date()).where("type","==",types.type).orderBy("updateTime","desc").limit(40).get();
  }
  else if(types.year)
  {
    let year = parseInt(types.year);
       CollectionSnapshot = yield CollectionRef.where("updateTime","<=",new Date()).where("year","==",year).orderBy("updateTime","desc").limit(40).get();
  }
  else if(types.season){
      CollectionSnapshot = yield CollectionRef.where("updateTime","<=",new Date()).where("season","==",types.season).orderBy("updateTime","desc").limit(40).get();
  }
    else if(types.status)
  {
      let status = null;
      if(types.status==="onGoing")
      {
        status=true;
      }
      else{
        status=false;
      }
       CollectionSnapshot = yield CollectionRef.where("updateTime","<=",new Date()).where("continuing","==",status).orderBy("updateTime","desc").limit(40).get();
  }
    else if(types.keyword)
  {
    const searchCollection = yield fireSql.query(`
    SELECT *
    FROM collections
    WHERE title like '${types.keyword}%'
    `)
    collectionMap=searchCollection;
  }
  else if(types.mostview||types.mostlike)
  {
      if(types.mostview)
      {
        console.log("asdsada");
    if(types.mostview==="season")
    {
     CollectionSnapshot = yield CollectionRef.where("season","==",season).where("year","==",year).orderBy("members","desc").limit(40).get();
    }
    else if(types.mostview==="year")
    {
      console.log("asdasd");
       CollectionSnapshot = yield CollectionRef.where("year","==",year).orderBy("members","desc").limit(40).get();
    }
    
    else if(types.mostview==="all")
    {
       CollectionSnapshot = yield CollectionRef.orderBy("members","desc").limit(40).get();
    }
  }
  
  else if(types.mostlike)
  {
    if(types.mostlike==="season")
    {
     
     CollectionSnapshot = yield CollectionRef.where("season","==",season).where("year","==",year).orderBy("score","desc").limit(40).get();
    }
    else if(types.mostlike==="year")
    {
       CollectionSnapshot = yield CollectionRef.where("year","==",year).orderBy("score","desc").limit(40).get();
    }
    else if(types.mostlike==="all")
    {
       CollectionSnapshot = yield CollectionRef.orderBy("score","desc").limit(40).get();
    }
    }
  }
    else if(types.for)
  {
     CollectionSnapshot = yield CollectionRef.where("updateTime","<=",new Date()).orderBy("updateTime","desc").limit(40).get();
  }      
}
else if(previousPage<types.pageNumber)
{
  let lastDoc = yield select(selectLastDocument);
   if(types.genres)
    {
      CollectionSnapshot = yield CollectionRef.where("updateTime","<=",new Date()).where("genres","array-contains",types.genres).orderBy("updateTime","desc").startAfter(lastDoc).limit(40).get();
  }
  else if(types.type)
  {
      CollectionSnapshot = yield CollectionRef.where("updateTime","<=",new Date()).where("type","==",types.type).orderBy("updateTime","desc").startAfter(lastDoc).limit(40).get();
  }
  else if(types.year)
  {
    let year = parseInt(types.year);
       CollectionSnapshot = yield CollectionRef.where("updateTime","<=",new Date()).where("year","==",year).orderBy("updateTime","desc").startAfter(lastDoc).limit(40).get();
  }
  else if(types.season){
      CollectionSnapshot = yield CollectionRef.where("updateTime","<=",new Date()).where("season","==",types.season).orderBy("updateTime","desc").startAfter(lastDoc).limit(40).get();
  }
    else if(types.status)
  {
      let status = null;
      if(types.status==="onGoing")
      {
        status=true;
      }
      else{
        status=false;
      }

       CollectionSnapshot = yield CollectionRef.where("updateTime","<=",new Date()).where("continuing","==",status).orderBy("updateTime","desc").startAfter(lastDoc).limit(40).get();
  }
    else if(types.keyword)
  {
    const searchCollection = yield fireSql.query(`
    SELECT *
    FROM collections
    WHERE title like '${types.keyword}%'
    `)
    collectionMap=searchCollection;
  }
    else if(types.mostview||types.mostlike)
  {
      if(types.mostview)
      {
    if(types.mostview==="season")
    {
     CollectionSnapshot = yield CollectionRef.where("season","==",season).where("year","==",year).orderBy("members","desc").startAfter(lastDoc).limit(40).get();
    }
    else if(types.mostview==="year")
    {
    
       CollectionSnapshot = yield CollectionRef.where("year","==",year).orderBy("members","desc").startAfter(lastDoc).limit(40).get();
    }
    
    else if(types.mostview==="all")
    {
       CollectionSnapshot = yield CollectionRef.orderBy("members","desc").startAfter(lastDoc).limit(40).get();
    }
  }
  
  else if(types.mostlike)
  {
    if(types.mostlike==="season")
    {
      CollectionRef = yield firestore.collection("collections");
     CollectionSnapshot = yield CollectionRef.where("season","==",season).where("year","==",year).startAfter(lastDoc).orderBy("score","desc").limit(40).get();
    }
    else if(types.mostlike==="year")
    {
      CollectionRef = yield firestore.collection("collections");
       CollectionSnapshot = yield CollectionRef.where("year","==",year).orderBy("score","desc").startAfter(lastDoc).limit(40).get();
    }
    else if(types.mostlike==="all")
    {
      CollectionRef = yield firestore.collection("collections");
       CollectionSnapshot = yield CollectionRef.orderBy("score","desc").startAfter(lastDoc).limit(40).get();
    }
    }
  }
    else if(types.for)
  {
       CollectionSnapshot = yield CollectionRef.where("updateTime","<=",new Date()).orderBy("updateTime","desc").startAfter(lastDoc).limit(40).get();
  }   
}
else if(previousPage>types.pageNumber)
{
    let firstDoc = yield select(selectFirstDocument);
   if(types.genres)
    {
     CollectionSnapshot = yield CollectionRef.where("updateTime","<=",new Date()).where("genres","array-contains",types.genres).orderBy("updateTime","desc").endBefore(firstDoc).limit(40).get();
  }
  else if(types.type)
  {
       CollectionSnapshot = yield CollectionRef.where("updateTime","<=",new Date()).where("type","==",types.type).orderBy("updateTime","desc").endBefore(firstDoc).limit(40).get();
  }
  else if(types.year)
  {
    let year = parseInt(types.year);
       CollectionSnapshot = yield CollectionRef.where("updateTime","<=",new Date()).where("year","==",year).orderBy("updateTime","desc").endBefore(firstDoc).limit(40).get();
  }
  else if(types.season){
       CollectionSnapshot = yield CollectionRef.where("updateTime","<=",new Date()).where("season","==",types.season).orderBy("updateTime","desc").endBefore(firstDoc).limit(40).get();
  }
    else if(types.status)
  {
      let status = null;
      if(types.status==="onGoing")
      {
        status=true;
      }
      else{
        status=false;
      }
      CollectionSnapshot = yield CollectionRef.where("updateTime","<=",new Date()).where("continuing","==",status).orderBy("updateTime","desc").endBefore(firstDoc).limit(40).get();
  }
    else if(types.keyword)
  {
    const searchCollection = yield fireSql.query(`
    SELECT *
    FROM collections
    WHERE title like '${types.keyword}%'
    `)
    console.log(searchCollection);
    collectionMap=searchCollection;
  }
  else if(types.mostview||types.mostlike)
  {
      if(types.mostview)
      {
    if(types.mostview==="season")
    {
       CollectionSnapshot = yield CollectionRef.where("season","==",season).where("year","==",year).orderBy("members","desc").endBefore(firstDoc).limit(40).get();
    }
    else if(types.mostview==="year")
    {
       CollectionSnapshot = yield CollectionRef.where("year","==",year).orderBy("members","desc").endBefore(firstDoc).limit(40).get();
    }
    
    else if(types.mostview==="all")
    {
       CollectionSnapshot = yield CollectionRef.orderBy("members","desc").endBefore(firstDoc).limit(40).get();
    }
  }
  
  else if(types.mostlike)
  {
    if(types.mostlike==="season")
    {
     CollectionSnapshot = yield CollectionRef.where("season","==",season).where("year","==",year).endBefore(firstDoc).orderBy("score","desc").limit(40).get();
    }
    else if(types.mostlike==="year")
    {
       CollectionSnapshot = yield CollectionRef.where("year","==",year).orderBy("score","desc").endBefore(firstDoc).limit(40).get();
    }
    else if(types.mostlike==="all")
    {
       CollectionSnapshot = yield CollectionRef.orderBy("score","desc").endBefore(firstDoc).limit(40).get();
    }
    }
  }
    else if(types.for)
  {
     CollectionSnapshot = yield CollectionRef.where("updateTime","<=",new Date()).orderBy("updateTime","desc").endBefore(firstDoc).limit(40).get();
  }   
}
    firstDocument = CollectionSnapshot.docs[0];
    lastDocument = CollectionSnapshot.docs[CollectionSnapshot.docs.length-1];
    if(collectionMap.length==0)
    {
    yield CollectionSnapshot.docs.forEach((doc)=>{
      let item=doc.data();
          collectionMap.push(item);
    })
    }
      prePage = types.pageNumber;
      yield put(fetchCollecionOverviewSuccess(collectionMap,firstDocument,lastDocument,prePage));
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


export function* fetchDayViewRatingAsync() {
  try {
  } catch (error) {
  }
}

export function* fetchDayViewRatingStart() {
  yield takeLatest(
    CollectionType.FETCH_DAY_VIEW_RATING_START,
    fetchDayViewRatingAsync
  );
}
export function* fetchWeekViewRatingAsync() {
  try {
  } catch (error) {
  }
}
export function* fetchWeekViewRatingStart() {
  yield takeLatest(
    CollectionType.FETCH_WEEK_VIEW_RATING_START,
    fetchWeekViewRatingAsync
  );
}
export function* fetchMonthViewRatingAsync() {
  try {
  } catch (error) {
  }
}
export function* fetchMonthViewRatingStart() {
  yield takeLatest(
    CollectionType.FETCH_MONTH_VIEW_RATING_START,
    fetchMonthViewRatingAsync
  );
}
export function* fetchSeasonViewRatingAsync() {
  try {
    let {month,season,year} = getMonthSeasonAndYear();
    const CollectionRef = yield firestore.collection("collections");
    let collectionMap = [];
    const CollectionSnapshot = yield CollectionRef.where("season","==",season).where("year","==",year).orderBy("members","desc").limit(6).get();
    CollectionSnapshot.docs.forEach((doc)=>{
      let item=doc.data();
      collectionMap.push(item);
    })
    yield put(fetchViewRatingSuccess(collectionMap));
  } catch (error) {
    console.log(error);
    yield put(fetchViewRatingFailure(error.message));
  }
}
export function* fetchSeasonViewRatingStart() {
  yield takeLatest(
    CollectionType.FETCH_SEASON_VIEW_RATING_START,
    fetchSeasonViewRatingAsync
  );
}
export function* fetchYearViewRatingAsync() {
  try {
    let {month,season,year} = getMonthSeasonAndYear();
    const CollectionRef = yield firestore.collection("collections");
    let collectionMap = [];
    const CollectionSnapshot = yield CollectionRef.where("year","==",year).orderBy("members","desc").limit(6).get();
    CollectionSnapshot.docs.forEach((doc)=>{
      let item=doc.data();
      collectionMap.push(item);
    })
    yield put(fetchViewRatingSuccess(collectionMap));
  } catch (error) {
    console.log(error);
    yield put(fetchViewRatingFailure(error.message));
  }
}
export function* fetchYearViewRatingStart() {
  yield takeLatest(
    CollectionType.FETCH_YEAR_VIEW_RATING_START,
    fetchYearViewRatingAsync
  );
}

export function* fetchDayScoreRatingAsync() {
  try {
  } catch (error) {
  }
}

export function* fetchDayScoreRatingStart() {
  yield takeLatest(
    CollectionType.FETCH_DAY_SCORE_RATING_START,
    fetchDayScoreRatingAsync
  );
}
export function* fetchWeekScoreRatingAsync() {
  try {
  } catch (error) {
  }
}
export function* fetchWeekScoreRatingStart() {
  yield takeLatest(
    CollectionType.FETCH_WEEK_SCORE_RATING_START,
    fetchWeekScoreRatingAsync
  );
}
export function* fetchMonthScoreRatingAsync() {
  try {
  } catch (error) {
  }
}
export function* fetchMonthScoreRatingStart() {
  yield takeLatest(
    CollectionType.FETCH_MONTH_SCORE_RATING_START,
    fetchMonthScoreRatingAsync
  );
}
export function* fetchSeasonScoreRatingAsync() {
  try {
    let {month,season,year}=getMonthSeasonAndYear();
    const CollectionRef = yield firestore.collection("collections");
    let collectionMap = [];
    const CollectionSnapshot = yield CollectionRef.where("season","==",season).where("year","==",year).orderBy("score","desc").limit(6).get();
    CollectionSnapshot.docs.forEach((doc)=>{
       let item=doc.data();
      collectionMap.push(item);
    })
    yield put(fetchScoreRatingSuccess(collectionMap));
  } catch (error) {
    console.log(error);
    yield put(fetchScoreRatingFailure(error.message));
  }
}

export function* fetchSeasonScoreRatingStart() {
  yield takeLatest(
    CollectionType.FETCH_SEASON_SCORE_RATING_START,
    fetchSeasonScoreRatingAsync
  );
}

export function* fetchYearScoreRatingAsync() {
  try {
    let {month,season,year}=getMonthSeasonAndYear();
    const CollectionRef = yield firestore.collection("collections");
    let collectionMap = [];
    const CollectionSnapshot = yield CollectionRef.where("year","==",year).orderBy("score","desc").limit(6).get();
    CollectionSnapshot.docs.forEach((doc)=>{
       let item=doc.data();
      collectionMap.push(item);
    })
    yield put(fetchScoreRatingSuccess(collectionMap));
  } catch (error) {
    console.log(error);
    yield put(fetchScoreRatingFailure(error.message));
  }
}
export function* fetchYearScoreRatingStart() {
  yield takeLatest(
    CollectionType.FETCH_YEAR_SCORE_RATING_START,
    fetchYearScoreRatingAsync
  );
}

export function* fetchSearchAsyncs({payload:keyword}){
   try {
    let collectionMap = [];
    const searchCollection = yield fireSql.query(`
    SELECT *
    FROM collections
    WHERE title like '${keyword}%'
    `)
    yield put(fetchSearchSuccess(searchCollection));
  } catch (error) {
    console.log(error);
    yield put(fetchSearchFailure(error.message));
  }
}

export function* fetchSearchStart(){
  yield takeLatest(
    CollectionType.FETCH_SEARCH_START,
    fetchSearchAsyncs,
  )
}

export function* fetchIncomingAsync(){
  try{
      let {month,season,year,nextSeason,nextSeasonYear} = getMonthSeasonAndYear();
       const CollectionRef = yield firestore.collection("collections");
      let collectionMap = [];
        const CollectionSnapshot = yield CollectionRef.where("season","==",nextSeason).where("year","==",nextSeasonYear).where("type","==","TV").orderBy("members","desc").limit(10).get();
      CollectionSnapshot.docs.forEach((doc)=>{
       let item=doc.data();
     collectionMap.push(item);
    })
    yield put(fetchIncomingSuccess(collectionMap));
  }
  catch(error)
  {
    console.log(error);
    yield put(fetchIncomingFailure(error.message));
  }
}

export function* fetchIncomingStart(){
  yield takeLatest(
    CollectionType.FETCH_INCOMING_START,
    fetchIncomingAsync,
  )
}

export function* updateBackground({payload:{id,url}}){
  console.log(id);
  yield call(updateItemBackground,id,url);
}

export function* updateBackgroundStart(){
  yield takeLatest(
    CollectionType.UPDATE_BACKGROUND,
    updateBackground,
  )
}

export function* updateTime({payload:id}){
  console.log("update");
  yield call(updateItemTime,id);
}

export function* updateTimeStart(){
  yield takeLatest(
    CollectionType.UPDATE_TIME,
    updateTime,
  )
}


export function* collectionSagas() {
  yield all([
    call(fetchCollectionPreviewStart),
    call(fetchCollectionOverviewStart),
    call(fetchSeasonScoreRatingStart),
    call(fetchYearScoreRatingStart),
    call(fetchSeasonViewRatingStart),
    call(fetchYearViewRatingStart),
     call(fetchIncomingStart),
    call(fetchSearchStart),
    call(updateTimeStart),
  call(updateBackgroundStart),
  // call(pushCollectionToStore)
]);
}

// export function* pushCollection() {
//   const Collection002 = yield fetch("https://api.jikan.moe/v3/season/2021/winter");
//   const Collection01 = yield fetch("https://api.jikan.moe/v3/season/2020/fall");
//   const Collection2 = yield fetch(
//     "https://api.jikan.moe/v3/season/2020/summer"
//   );
//   const Collection3 = yield fetch(
//     "https://api.jikan.moe/v3/season/2020/spring"
//   );
//   const Collection4 = yield fetch(
//     "https://api.jikan.moe/v3/season/2020/winter"
//   );
//   const Collection5 = yield fetch("https://api.jikan.moe/v3/season/2019/fall");
//   const Collection6 = yield fetch(
//     "https://api.jikan.moe/v3/season/2019/summer"
//   );
//   const Collection7 = yield fetch(
//     "https://api.jikan.moe/v3/season/2019/spring"
//   );
//   const Collection8 = yield fetch(
//     "https://api.jikan.moe/v3/season/2019/winter"
//   );
//   const Collection9 = yield fetch("https://api.jikan.moe/v3/season/2018/fall");
//   const Collection10 = yield fetch(
//     "https://api.jikan.moe/v3/season/2018/summer"
//   );
//   const Collection11 = yield fetch(
//     "https://api.jikan.moe/v3/season/2018/spring"
//   );
//   const Collection12 = yield fetch(
//     "https://api.jikan.moe/v3/season/2018/winter"
//   );
//   const Collection13 = yield fetch("https://api.jikan.moe/v3/season/2017/fall");
//   const Collection14 = yield fetch(
//     "https://api.jikan.moe/v3/season/2017/summer"
//   );
//   const Collection15 = yield fetch(
//     "https://api.jikan.moe/v3/season/2017/spring"
//   );
//   // const Collection17 = yield fetch("https://api.jikan.moe/v3/season/2016/fall");
//   // const Collection18 = yield fetch(
//   //   "https://api.jikan.moe/v3/season/2016/summer"
//   // );
//   // const Collection19 = yield fetch(
//   //   "https://api.jikan.moe/v3/season/2016/spring"
//   // );
//   // const c001=yield Collection001.json();
//   const c002=yield Collection002.json();
//   const c1 = yield Collection01.json();
//   const c2 = yield Collection2.json();
//   const c3 = yield Collection3.json();
//   const c4 = yield Collection4.json();
//   const c5 = yield Collection5.json();
//   const c6 = yield Collection6.json();
//   const c7 = yield Collection7.json();
//   const c8 = yield Collection8.json();
//   const c9 = yield Collection9.json();
//   const c10 = yield Collection10.json();
//   const c11 = yield Collection11.json();
//   const c12 = yield Collection12.json();
//   const c13 = yield Collection13.json();
//   const c14 = yield Collection14.json();
//   const c15 = yield Collection15.json();
//   // const c16 = yield Collection16.json();
//   // const c17 = yield Collection17.json();
//   // const c18 = yield Collection18.json();
//   // const c19 = yield Collection19.json();
//   c002.anime.forEach(item=>{
//     item.season="winter";
//     item.year=2021;
   
//   })
//   console.log(c002.anime);
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
//       item.year=2020;
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
//       c8.anime.forEach(item => {
//       item.season="winter";
//       item.year=2019;
//     });
//      c9.anime.forEach(item => {
//       item.season="fall";
//       item.year=2018;
//     });
//      c10.anime.forEach(item => {
//       item.season="summer";
//       item.year=2018;
//     });
//      c11.anime.forEach(item => {
//       item.season="spring";
//       item.year=2018;
//     });
//      c12.anime.forEach(item => {
//       item.season="winter";
//       item.year=2018;
//     });
//      c13.anime.forEach(item => {
//       item.season="fall";
//       item.year=2017;
//     });
//      c14.anime.forEach(item => {
//       item.season="summer";
//       item.year=2017;
//     });
//      c15.anime.forEach(item => {
//       item.season="spring";
//       item.year=2017;
//     });
//   const Collection1 = c002.anime.concat(
//     c1.anime,
//     c2.anime,
//     c3.anime,
//     c4.anime,
//     c5.anime,
//     c6.anime,
//     c7.anime,
//     c8.anime,
//     c9.anime,
//     c10.anime,
//     c11.anime,
//     c12.anime,
//     c13.anime,
//     c14.anime,
//     c15.anime,
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
  
//         const regex = /\s/g;
//         const regex2 = /[^A-Za-z0-9 ]/g;
//   Collection1.forEach(item=>{
//     item.routeName=item.title.toLowerCase().replace(regex2,"").replace(regex,"-");
//     // let datetime = item.airing_start.split('-');
//     // let year = parseInt(datetime[0]);
//     // let month = parseInt(datetime[1]);
//     // let date = parseInt(datetime[2].substr(0,2));
//     // let hour = parseInt(datetime[2].substr(3,2));
//     // let minute = parseInt(datetime[3]);
//     // let second = parseInt(datetime[4]);
//     if(item.airing_start)
//     {
//     item.updateTime = new Date(item.airing_start);
//     }
//     else
//     {
//        item.updateTime= new Date(item.year,1,1,0,0,0,0);
//     }
//   })
//   //let namesSet = new Set(array.map(item => item.name));
//   let Collectionb = [];
//   let Collection = [];
//   // Collection.push(Collection[0]);
//   for (let i = 0; i < Collection1.length; i++) {
//     if (Collection1[i].r18 == false && Collection1[i].kids == false) {
//       if(Collection1[i].year==2021)
//       {
//       if (Collectionb[Collection1[i].mal_id] === undefined) {
//         Collectionb[Collection1[i].mal_id] = 1;
//         Collection.push(Collection1[i]);
//       }
//     }
//     else if(Collection1[i].year<2021&&Collection1[i].score>=5.5)
//     {
//        if (Collectionb[Collection1[i].mal_id] === undefined) {
//         Collectionb[Collection1[i].mal_id] = 1;
//         Collection.push(Collection1[i]);
//       }
//     }
//     }
//   }
//   console.log(Collection.length);
//   addCollectionToFireStore("collections", Collection.slice(1500,2000));
// }
// export function* pushCollectionToStore() {
//   yield takeLatest(CollectionType.PUSH_COLLECTION_TO_STORE, pushCollection);
// }


