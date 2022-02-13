import { ITEMS_REQUEST, ITEMS_REQUEST_FAILURE, ITEMS_REQUEST_SUCCESS, DETAILS_REQUEST, DETAILS_REQUEST_FAILURE, DETAILS_REQUEST_SUCCESS } from './actionTypes';

export const itemsRequest = () => ({
  type: ITEMS_REQUEST, payload: {}
});
export const itemsRequestFailure = error => ({
  type: ITEMS_REQUEST_FAILURE, payload: {error},
});
export const itemsRequestSuccess = items => ({
  type: ITEMS_REQUEST_SUCCESS, payload: {items},
});
export const detailsRequest = id => ({
  type: DETAILS_REQUEST, payload: {id},
});
export const detailsRequestFailure = error => ({
  type: DETAILS_REQUEST_FAILURE, payload: {error},
});
export const detailsRequestSuccess = item => ({
  type: DETAILS_REQUEST_SUCCESS, payload: {item},
});