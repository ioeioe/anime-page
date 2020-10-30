import { AccountTypes } from "./account.types";

export const toggleAccountDropdown = () => ({
  type: AccountTypes.TOGGLE_ACCOUT_DROPDOWN,
});

export const addItemToCollections = (item) => ({
  type: AccountTypes.ADD_ITEM_TO_COLLECTIONS,
  payload: item,
});

export const removeItemFromCollections = (item) => ({
  type: AccountTypes.REMOVE_ITEM_FROM_COLLECTIONS,
  payload: item,
});
