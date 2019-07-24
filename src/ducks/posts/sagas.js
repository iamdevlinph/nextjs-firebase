import { takeLatest, take, put } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import firebase from 'firebase/app';
import 'firebase/firestore';
import * as postTypes from './types';

function* postsWillFetch() {
  const db = firebase.firestore();
  const ref = db.collection('posts');
  const channel = eventChannel(emit => ref.onSnapshot(emit));

  try {
    while (true) {
      const posts = [];
      const data = yield take(channel);
      data.forEach(doc => {
        posts.push({ ...doc.data });
      });
      yield put({
        type: postTypes.FETCH_POSTS_SUCCESS,
        paylaod: posts,
      });
    }
  } catch (e) {
    console.error(`${postTypes.FETCH_POSTS_FAIL} ${e}`);
  }
}

const postSagas = [takeLatest(postTypes.FETCH_POSTS_REQUEST, postsWillFetch)];

export default postSagas;
