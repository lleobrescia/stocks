import * as actions from 'utils/constants/actions';
import { takeLatest, put } from 'redux-saga/effects';

export default function* watcherSaga() {
  yield takeLatest(actions.SET_STOCK_START, setStock);
}

export function* setStock({ selectedStock }) {
  yield put({ type: actions.SET_STOCK_END, selectedStock });
}
