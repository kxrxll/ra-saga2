import { ITEMS_REQUEST, ITEMS_REQUEST_FAILURE, ITEMS_REQUEST_SUCCESS } from '../actions/actionTypes';

const initialState = { items: [], loading: false, error: null };

export default function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case ITEMS_REQUEST:
      return { ...state, items: [], loading: true, error: null };
    case ITEMS_REQUEST_FAILURE:
      const {error} = action.payload;
      return { ...state, items: [], loading: false, error };
    case ITEMS_REQUEST_SUCCESS:
      const {items} = action.payload;
      return { ...state, items, loading: false, error: null };
    default:
      return state;
    }
}