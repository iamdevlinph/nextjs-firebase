import { all } from 'redux-saga/effects';

import postsSagas from './posts/sagas';

export default function* mySaga() {
  yield all([...postsSagas]);
}
