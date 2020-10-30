import { ItemType } from "./item.types";

const INITIAL_STATE = {
  item:{},
  loading:false,
    error:"",
};

const ItemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case ItemType.FETCH_ITEM_START:
          return {
              loading:true,
              ...state,
          }
    case ItemType.FETCH_ITEM_SUCCESS:
    return{
        item:action.payload,
        loading:false,
        error:"",
    }
    case ItemType.FETCH_ITEM_FAILURE:
        return{
            item:{},
            loading:false,
            error:"",
        }
    default:
      return state;
  }
};
export default ItemReducer;
