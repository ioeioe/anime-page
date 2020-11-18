import { CommentTypes } from "./comment.types";

const INITIAL_STATE = {
  comments:[],
  loading:false,
};

const CommentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CommentTypes.FETCH_COMMENTS_START:
      return {
        ...state,
        loading:true,
      };
    case CommentTypes.FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        comments:action.payload,
        loading:false,
      };
    case CommentTypes.FETCH_COMMENTS_FAILURE:
      {
      return {
        ...state,
        loading:false,
      }
    };
    default:
      return state;
  }
};

export default CommentReducer;
