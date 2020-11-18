import { TrackingTypes } from "./anime-track.types";
const INITIAL_STATE = {
    gallery:[],
    error:"",
};

const TrackingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case TrackingTypes.GET_USER_GALLERY_SUCCESS:
          return{
               ...state,
              gallery:action.payload,
              error:"", 
          }
            case TrackingTypes.GET_USER_GALLERY_FAILURE:
          return{
            ...state,
              error:action.payload,    
          }
    default:
      return state;
  }
};

export default TrackingReducer;
