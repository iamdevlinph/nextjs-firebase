import React from 'react';
import PropTypes from 'prop-types';
import { postsActions } from '../src/ducks/posts';

const IndexPage = props => {
  const { posts } = props;
  return (
    <div>
      <h2>Index Page</h2>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  );
};

IndexPage.getInitialProps = async ({ ctx }) => {
  const { store } = ctx;
  store.dispatch(postsActions.requestPosts());

  await new Promise(resolve => {
    const unsubscribe = store.subscribe(() => {
      const { posts } = store.getState();
      if (posts.allPosts) {
        unsubscribe();
        resolve();
      }
    });
  });

  const { allPosts } = store.getState().posts;
  return {
    posts: allPosts,
  };
};

export default IndexPage;

IndexPage.propTypes = {
  posts: PropTypes.array.isRequired,
};
