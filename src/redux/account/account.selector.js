import { createSelector } from "reselect";
const Account = (state) => state.account;
export const selectHiddenDropdown = createSelector(
  [Account],
  (data) => data.hidden
);


