import { UserTypes } from "./user.types";
const INITIAL_STATE = {
  currentUser: null,
  loading:false,
  error: null,
};
const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.EMAIL_SIGN_IN_START:
      return{
        ...state,
        loading:true,
      }
      case UserTypes.SIGN_UP_START:
        return{
          ...state,
          loading:true,
        }
    case UserTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        loading:false,
        error:null,
        currentUser: action.payload,
      };
    case UserTypes.SIGN_OUT_FAILURE:
    case UserTypes.SIGN_IN_FAILURE:
    case UserTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        loading:false,
        error: action.payload,
      };
    case UserTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        loading:false,
        currentUser: null,
        error: null,
      };
    default:
      {
        state.loading=false;
      }
      return state;
  }
};
export default UserReducer;
