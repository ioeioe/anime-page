import { SearchType } from "./search.types";

export const toggleSearchHidden = () => ({
  type: SearchType.TOGGLE_SEARCH_HIDDEN,
});

export const ShowDropdown = (search) => ({
  type: SearchType.SHOW_DROP_DOWN,
});

// export const DropDownSuccess = (searchCollection) => ({
//   type: SearchType.DROP_DOWN_SUCCESS,
//   payload: searchCollection,
// });

// export const DropDownFailure = (error) => ({
//   type: SearchType.DropDownFailure,
//   payload: error,
// });
