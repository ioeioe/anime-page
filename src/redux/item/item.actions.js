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