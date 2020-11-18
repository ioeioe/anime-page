import { CollectionType } from "./collection.types";

const INITIAL_STATE = {
  collections: [],
  viewRating:[],
  scoreRating:[],
  searchCollection:[],
  incomingCollection:[],
  firstDocument:null,
  lastDocument:null,
  previousPage:0,
  loading: false,
  viewRatingLoading:false,
  scoreRatingLoading:false,
  incomingLoading:false,
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
        collections: action.payload.collectionMap,
        firstDocument:action.payload.firstDocument,
        lastDocument:action.payload.lastDocument,
        previousPage:action.payload.previousPage,
        loading: false,
        error: null,
      };
    case CollectionType.FETCH_COLLECTIONS_OVERVIEW_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
        case CollectionType.FETCH_DAY_VIEW_RATING_START:
           case CollectionType.FETCH_WEEK_VIEW_RATING_START:
              case CollectionType.FETCH_MONTH_VIEW_RATING_START:
                 case CollectionType.FETCH_SEASON_VIEW_RATING_START:
                    case CollectionType.FETCH_YEAR_VIEW_RATING_START:
      return {
        ...state,
        viewRatingLoading: true,
      };
    case CollectionType.FETCH_VIEW_RATING_SUCCESS:
      return {
        ...state,
        viewRating: action.payload,
        viewRatingLoading: false,
        error: null,
      };
    case CollectionType.FETCH_VIEW_RATING_FAILURE:
      return {
        ...state,
        viewRatingLoading: false,
        error: action.payload,
      };
             case CollectionType.FETCH_DAY_SCORE_RATING_START:
                   case CollectionType.FETCH_WEEK_SCORE_RATING_START:
                         case CollectionType.FETCH_MONTH_SCORE_RATING_START:
                               case CollectionType.FETCH_SEASON_SCORE_RATING_START:
                                     case CollectionType.FETCH_YEAR_SCORE_RATING_START:

      return {
        ...state,
        scoreRatingLoading: true,
      };
    case CollectionType.FETCH_SCORE_RATING_SUCCESS:
      return {
        ...state,
        scoreRating: action.payload,
        scoreRatingLoading: false,
        error: null,
      };
    case CollectionType.FETCH_SCORE_RATING_FAILURE:
      return {
        ...state,
        scoreRatingLoading: false,
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
          case CollectionType.FETCH_INCOMING_START:
        return {
          ...state,
          incomingLoading:true,
        }
       
      case CollectionType.FETCH_INCOMING_SUCCESS:
        return {
          ...state,
          incomingCollection:action.payload,
          incomingLoading:false,
        }
            case CollectionType.FETCH_INCOMING_FAILURE:
        return {
          ...state,
          error:action.payload,
          incomingLoading:false,
        }
       
    default:
      return state;
  }
};
export default CollectionReducer;
