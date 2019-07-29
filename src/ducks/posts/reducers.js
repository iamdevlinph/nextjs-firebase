import * as types from './types';

const initialState = {
  allPosts: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        allPosts: payload,
      };
    default:
      return state;
  }
};
