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

export const fetchCollecionOverviewSuccess = (collectionMap) => ({
  type: CollectionType.FETCH_COLLECTIONS_OVERVIEW_SUCCESS,
  payload: collectionMap,
});
export const fetchCollectionOverviewFailure = (errorMessage) => ({
  type: CollectionType.FETCH_COLLECTIONS_OVERVIEW_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionViewRankingStart = () => ({
  type: CollectionType.FETCH_COLLECTIONS_VIEW_RANKING_START,
});

export const fetchCollecionViewRankingSuccess = (collectionMap) => ({
  type: CollectionType.FETCH_COLLECTIONS_VIEW_RANKING_SUCCESS,
  payload: collectionMap,
});
export const fetchCollectionViewRankingFailure = (errorMessage) => ({
  type: CollectionType.FETCH_COLLECTIONS_VIEW_RANKING_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionScoreRankingStart = () => ({
  type: CollectionType.FETCH_COLLECTIONS_SCORE_RANKING_START,
});

export const fetchCollecionScoreRankingSuccess = (collectionMap) => ({
  type: CollectionType.FETCH_COLLECTIONS_SCORE_RANKING_SUCCESS,
  payload: collectionMap,
});
export const fetchCollectionScoreRankingFailure = (errorMessage) => ({
  type: CollectionType.FETCH_COLLECTIONS_SCORE_RANKING_FAILURE,
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

export const updateTime = (id)=>({
  type:CollectionType.UPDATE_TIME,
  payload:id,
})


export const pushCollectionToStore = () => ({
  type: CollectionType.PUSH_COLLECTION_TO_STORE,
});
