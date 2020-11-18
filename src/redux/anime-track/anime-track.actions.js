import {TrackingTypes} from './anime-track.types';

export const getUserGallerySuccess = (gallery)=>({
    type:TrackingTypes.GET_USER_GALLERY_SUCCESS,
    payload:gallery,
})

export const getUserGalleryFailure=(err)=>({
    type:TrackingTypes.GET_USER_GALLERY_FAILURE,
    payload:err
})

export const addItemToGallery = (item) =>({
    type:TrackingTypes.ADD_ITEM_TO_GALLERY,
    payload:item
})

export const removeItemFromGallery = (item) =>({
    type:TrackingTypes.REMOVE_ITEM_FROM_GALLERY,
    payload:item,
})

// export const pushGalleryToFirestore = (userId) =>({
//     type:TrackingTypes.PUSH_GALLERY_TO_FIRESTORE,
//     payload:userId,
// })

// export const clearGallery = ()=>({
//     type:TrackingTypes.CLEAR_GALLERY,
// })