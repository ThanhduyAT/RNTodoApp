import {all} from '@redux-saga/core/effects';

import authSagas from './auth/sagas/index';

export function* rootSagas() {
  yield all([...authSagas]);
}
