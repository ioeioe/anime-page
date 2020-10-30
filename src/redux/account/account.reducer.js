import { AccountTypes } from "./account.types";
import {
  addItemToCollections,
  removeItemFromCollections,
} from "./account.utils";
const INITIAL_STATE = {
  userCollections: [],
  hidden: true,
};

export const AccountReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AccountTypes.TOGGLE_ACCOUT_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden,
      }
    default:
      return state;
  }
};

export default AccountReducer;
