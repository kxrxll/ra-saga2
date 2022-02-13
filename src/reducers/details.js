import { DETAILS_REQUEST, DETAILS_REQUEST_FAILURE, DETAILS_REQUEST_SUCCESS } from '../actions/actionTypes';

const initialState = { item: null, loading: false, error: null };

export default function detailsReducer(state = initialState, action) {
  switch (action.type) {
    case DETAILS_REQUEST:
      return { ...state, item: null, loading: true, error: null };
    case DETAILS_REQUEST_FAILURE:
      const {error} = action.payload;
      return { ...state, item: null, loading: false, error };
    case DETAILS_REQUEST_SUCCESS:
      const {item} = action.payload;
      return { ...state, item, loading: false, error: null };
    default:
      return state;
    }
}