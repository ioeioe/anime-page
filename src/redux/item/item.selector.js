import { createSelector } from "reselect";

const Item = (state) => state.item;


export const selectItem = createSelector(
  [Item],
  (data) => data.item
);

export const itemLoading = createSelector(
    [Item],
    (data)=>data.loading,
)