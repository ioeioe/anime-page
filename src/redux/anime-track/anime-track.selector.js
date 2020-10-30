import { createSelector } from "reselect";

export const Tracking = (state) => state.tracking;

export const selectListTracking = createSelector(
  [Tracking],
  (data) => data.indexArray,
);

