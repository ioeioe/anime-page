import { ItemType } from "./item.types";

const INITIAL_STATE = {
  item:{},
  loading:false,
  inGallery:false,
    error:"",
};

const ItemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case ItemType.FETCH_ITEM_START:
          return {  
              ...state,      
              loading:true,
              
          }
    case ItemType.FETCH_ITEM_SUCCESS:
    return{
        ...state,
        item:action.payload,
        loading:false,
        error:"",
    }
    case ItemType.FETCH_ITEM_FAILURE:
        return{
            ...state,
            item:{},
            loading:false,
            error:action.payload,
        }
    // case ItemType.CHECK_ITEM_IN_GALLERY_SUCCESS:
    //     return{
    //         ...state,
    //         inGallery:action.payload
    //     }
    // case ItemType.CHECK_ITEM_IN_GALLERY_FAILURE:
    //     return{
    //         ...state,
    //         inGallery:false,
    //         error:action.payload,
    //     }
    default:
      return state;
  }
};
export default ItemReducer;
