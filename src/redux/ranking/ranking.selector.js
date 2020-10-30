import { createSelector } from "reselect";

const Ranking = (state) => state.ranking;

export const selectHiddenValue = createSelector(
  [Ranking],
  (data) => data.hidden
);
