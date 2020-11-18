import { createSelector } from "reselect";

export const Tracking = (state) => state.tracking;

export const selectGallery = createSelector(
  [Tracking],
  (data) => data.gallery,
);

