import { createSelector } from "reselect";

export const Comment = (state) => state.comment;

export const selectComments = createSelector(
  [Comment],
  (data) => data.comments,
);
export const loadingComments = createSelector(
    [Comment],
    (data)=>data.loading,
)

