import { createSelector } from "reselect";

export const Announce = (state) => state.announce;

export const selectAnnounceHidden = createSelector(
  [Announce],
  (data) => data.hidden
);

