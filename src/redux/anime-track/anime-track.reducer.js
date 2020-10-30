import { TrackingTypes } from "./anime-track.types";

const INITIAL_STATE = {
    indexArray:[],
    error:"",
};

const TrackingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case TrackingTypes.GET_USER_TRACKING_SUCCESS:
          return{
              indexArray:action.payload,
              error:"",
              ...state,
          }
            case TrackingTypes.GET_USER_TRACKING_FAILURE:
          return{
              error:"",

              ...state,
          }
    case TrackingTypes.ADD_ITEM:
      return {
        ...state,
  
      };
    case TrackingTypes.REMOVE_ITEM:
        return{
            ...state,
        }
    case TrackingTypes.CLEAR_ALL:
        return{
            ...state,
        }
 
    default:
      return state;
        
  }
};

export default TrackingReducer;
