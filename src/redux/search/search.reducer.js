import { SearchType } from "./search.types";

const INITIAL_STATE = {
  search_hidden: true,
  error: null,
};

const SearchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SearchType.TOGGLE_SEARCH_HIDDEN:
      return {
        ...state,
        search_hidden: true,
      };
    case SearchType.SHOW_DROP_DOWN:
      return {
        ...state,
        search_hidden: false,
      };
    default:
      return state;
  }
};
export default SearchReducer;
