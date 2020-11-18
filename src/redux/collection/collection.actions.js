import { CollectionType } from "./collection.types";

export const fetchCollectionPreviewStart = () => ({
  type: CollectionType.FETCH_COLLECTIONS_PREVIEW_START,
});

export const fetchCollecionPreviewSuccess = (collectionMap) => ({
  type: CollectionType.FETCH_COLLECTIONS_PREVIEW_SUCCESS,
  payload: collectionMap,
});
export const fetchCollectionPreviewFailure = (errorMessage) => ({
  type: CollectionType.FETCH_COLLECTIONS_PREVIEW_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionOverviewStart = (types) => ({
  type: CollectionType.FETCH_COLLECTIONS_OVERVIEW_START,
  payload:types,
});

export const fetchCollecionOverviewSuccess = (collectionMap,firstDocument,lastDocument,previousPage) => ({
  type: CollectionType.FETCH_COLLECTIONS_OVERVIEW_SUCCESS,
  payload: {collectionMap,firstDocument,lastDocument,previousPage},
});
export const fetchCollectionOverviewFailure = (errorMessage) => ({
  type: CollectionType.FETCH_COLLECTIONS_OVERVIEW_FAILURE,
  payload: errorMessage,
});

export const fetchDayViewRatingStart = () => ({
  type: CollectionType.FETCH_DAY_VIEW_RATING_START,
});
export const fetchWeekViewRatingStart = () => ({
  type: CollectionType.FETCH_WEEK_VIEW_RATING_START,
});
export const fetchMonthViewRatingStart = () => ({
  type: CollectionType.FETCH_MONTH_VIEW_RATING_START,
});
export const fetchSeasonViewRatingStart = () => ({
  type: CollectionType.FETCH_SEASON_VIEW_RATING_START,
});
export const fetchYearViewRatingStart = () => ({
  type: CollectionType.FETCH_YEAR_VIEW_RATING_START,
});
export const fetchViewRatingSuccess = (collectionMap) => ({
  type: CollectionType.FETCH_VIEW_RATING_SUCCESS,
  payload: collectionMap,
});
export const fetchViewRatingFailure = (errorMessage) => ({
  type: CollectionType.FETCH_VIEW_RATING_FAILURE,
  payload: errorMessage,
});

export const fetchDayScoreRatingStart = () => ({
  type: CollectionType.FETCH_DAY_SCORE_RATING_START,
});
export const fetchWeekScoreRatingStart = () => ({
  type: CollectionType.FETCH_WEEK_SCORE_RATING_START,
});
export const fetchMonthScoreRatingStart = () => ({
  type: CollectionType.FETCH_MONTH_SCORE_RATING_START,
});
export const fetchSeasonScoreRatingStart = () => ({
  type: CollectionType.FETCH_SEASON_SCORE_RATING_START,
});
export const fetchYearScoreRatingStart = () => ({
  type: CollectionType.FETCH_YEAR_SCORE_RATING_START,
});

export const fetchScoreRatingSuccess = (collectionMap) => ({
  type: CollectionType.FETCH_SCORE_RATING_SUCCESS,
  payload: collectionMap,
});
export const fetchScoreRatingFailure = (errorMessage) => ({
  type: CollectionType.FETCH_SCORE_RATING_FAILURE,
  payload: errorMessage,
});
export const fetchSearchStart = (keyword) => ({
  type: CollectionType.FETCH_SEARCH_START,
  payload:keyword,
});

export const fetchSearchSuccess = (collectionMap) => ({
  type: CollectionType.FETCH_SEARCH_SUCCESS,
  payload: collectionMap,
});
export const fetchSearchFailure = (errorMessage) => ({
  type: CollectionType.FETCH_SEARCH_FAILURE,
  payload: errorMessage,
});

export const fetchRandomCollectionStart=()=>({
  type:CollectionType.FETCH_RANDOM_START,
})

export const fetchRandomCollectionSuccess=(collection)=>({
  type:CollectionType.FETCH_RANDOM_SUCCESS,
  payload:collection,
})

export const fetchIncomingStart=()=>({
  type:CollectionType.FETCH_INCOMING_START,
})

export const fetchIncomingSuccess=(collection)=>({
  type:CollectionType.FETCH_INCOMING_SUCCESS,
  payload:collection,
})
export const fetchIncomingFailure=(error)=>({
  type:CollectionType.FETCH_INCOMING_FAILURE,
  payload:error,
})

export const updateTime = (id)=>({
  type:CollectionType.UPDATE_TIME,
  payload:id,
})

export const updateBackground = (id,url)=>({
  type:CollectionType.UPDATE_BACKGROUND,
  payload:{id,url},
})


export const pushCollectionToStore = () => ({
  type: CollectionType.PUSH_COLLECTION_TO_STORE,
});

