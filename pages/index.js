import React from 'react';
import PropTypes from 'prop-types';
import { postsActions } from '../src/ducks/posts';
import { MainLayout } from '../src/layouts';
import { PostEntry } from '../src/components';

const IndexPage = props => {
  const { posts } = props;
  const postList = posts.map(val => {
    return (
      <PostEntry title={val.title} content={val.content} key={val.title} />
    );
  });
  return (
    <MainLayout>
      <h2>Index Page</h2>
      <div>{postList}</div>
    </MainLayout>
  );
};

IndexPage.getInitialProps = async ({ store }) => {
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
