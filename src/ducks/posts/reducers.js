import * as types from './types';

const initialState = {
  posts: [],
};

export default (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case types.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: payload,
      };
    default:
      return state;
  }
};
