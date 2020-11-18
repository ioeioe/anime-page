import {ItemType} from './item.types';

export const fetchItemStart=(id)=>({
    type:ItemType.FETCH_ITEM_START,
    payload:id,
})

export const fetchItemSuccess=(item)=>({
    type:ItemType.FETCH_ITEM_SUCCESS,
    payload:item,
})

export const fetchItemFailure=(error)=>({
    type:ItemType.FETCH_ITEM_FAILURE,
    payload:error,
})

// export const checkItemInGalleryStart=(id)=>({
//     type:ItemType.CHECK_ITEM_IN_GALLERY_START,
//     payload:id,
// })
// export const checkItemInGallerySuccess = (result)=>({
//     type:ItemType.CHECK_ITEM_IN_GALLERY_SUCCESS,
//     payload:result,
// })
// export const checkItemInGalleryFailure = (error)=>({
//     type:ItemType.CHECK_ITEM_IN_GALLERY_FAILURE,
//     payload:error,
// })