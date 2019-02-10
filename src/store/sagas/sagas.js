import { all } from 'redux-saga/effects';

import SearchSaga from './SearchSaga';

function* Sagas() {
  yield all([
    SearchSaga()
  ]);
}

export default Sagas;
