import {TrackingTypes} from './anime-track.types';

export const GetUserTrackingStart = (userID)=>({
    type: TrackingTypes.GET_USER_TRACKING_START,
    payload:userID,
})

export const GetUserTrackingSuccess = (arr)=>({
    type:TrackingTypes.GET_USER_TRACKING_SUCCESS,
    payload:arr,
})

export const GetUserTrackingFailre=(err)=>({
    type:TrackingTypes.GET_USER_TRACKING_FAILURE,
    payload:err
})