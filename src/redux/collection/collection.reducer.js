import { CollectionType } from "./collection.types";

const INITIAL_STATE = {
  collections: [],
   loading: false,
  viewRanking:[],
  scoreRanking:[],
  searchCollection:[],
  viewRankingLoading:false,
  scoreRankingLoading:false,
  error: null,
};

const CollectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CollectionType.FETCH_COLLECTIONS_PREVIEW_START:
      return {
        ...state,
        loading: true,
      };
    case CollectionType.FETCH_COLLECTIONS_PREVIEW_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        loading: false,
        error: null,
      };
    case CollectionType.FETCH_COLLECTIONS_PREVIEW_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      case CollectionType.FETCH_COLLECTIONS_OVERVIEW_START:
      return {
        ...state,
        loading: true,
      };
    case CollectionType.FETCH_COLLECTIONS_OVERVIEW_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        loading: false,
        error: null,
      };
    case CollectionType.FETCH_COLLECTIONS_OVERVIEW_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
        case CollectionType.FETCH_COLLECTIONS_VIEW_RANKING_START:
      return {
        ...state,

        viewRankingLoading: true,
      };
    case CollectionType.FETCH_COLLECTIONS_VIEW_RANKING_SUCCESS:
      return {
        ...state,
        viewRanking: action.payload,
        viewRankingLoading: false,
        error: null,
      };
    case CollectionType.FETCH_COLLECTIONS_VIEW_RANKING_FAILURE:
      return {
        ...state,
        viewRankingLoading: false,
        error: action.payload,
      };
             case CollectionType.FETCH_COLLECTIONS_SCORE_RANKING_START:
      return {
        ...state,
        scoreRankingLoading: true,
      };
    case CollectionType.FETCH_COLLECTIONS_SCORE_RANKING_SUCCESS:
      return {
        ...state,
        scoreRanking: action.payload,
        scoreRankingLoading: false,
        error: null,
      };
    case CollectionType.FETCH_COLLECTIONS_SCORE_RANKING_FAILURE:
      return {
        ...state,
        scoreRankingLoading: false,
        error: action.payload,
      };
          case CollectionType.FETCH_SEARCH_SUCCESS:
      return {
        ...state,
        searchCollection: action.payload,
        error: null,
      };
    case CollectionType.FETCH_SEARCH_FAILURE:
      return {
        ...state,     
        error: action.payload,
      };
    default:
      return state;
  }
};
export default CollectionReducer;
