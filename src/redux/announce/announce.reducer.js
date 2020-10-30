import { AnnounceTypes } from "./announce.types";

const INITIAL_STATE = {
  title:"",
  para:"",
  check:true,
  hidden: true,
};

const AnnounceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AnnounceTypes.TOGGLE_ANNOUNCE_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case AnnounceTypes.CLOSING_ANNOUNCE:
      return {
        ...state,
        hidden: true,
      };
    case AnnounceTypes.SHOWING_ANNOUNCE:
      {
      return {
        hidden:false,
        check:action.payload.check,
        title:action.payload.title,
        para:action.payload.para,
      }
    };
    default:
      return state;
         
     
  }
};

export default AnnounceReducer;
