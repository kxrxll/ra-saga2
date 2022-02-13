import { call, put, spawn, takeLatest } from 'redux-saga/effects';
import { itemsRequestFailure, itemsRequestSuccess, detailsRequestFailure, detailsRequestSuccess } from '../actions/index';
import { ITEMS_REQUEST,  DETAILS_REQUEST} from '../actions/actionTypes';
import { getItemsList, getDetails } from '../api';

function* handleGetListSaga() {
  try {
    const data = yield call(getItemsList);
    yield put(itemsRequestSuccess(data));
  } catch (e) {
    yield put(itemsRequestFailure(e.message));
  }
}

function* handleGetDetailsSaga(action) {
  try {
    const data = yield call(getDetails, action.payload.id);
    yield put(detailsRequestSuccess(data));
  } catch (e) {
    yield put(detailsRequestFailure(e.message));
  }
}

function* watchGetListSaga() {
  yield takeLatest(ITEMS_REQUEST, handleGetListSaga);
}

function* watchGetDetailsSaga() {
  yield takeLatest(DETAILS_REQUEST, handleGetDetailsSaga);
}

export default function* saga() {
  yield spawn(watchGetListSaga);
  yield spawn(watchGetDetailsSaga);
}

