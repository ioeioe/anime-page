import { createSelector } from "reselect";

const Search = (state) => state.search;

export const selectSearchHidden = createSelector(
  [Search],
  (data) => data.search_hidden
);

export const selectSearchCollection = createSelector(
  [Search],
  (data) => data.searchCollection
);
