import React from 'react';
import PropTypes from 'prop-types';

const PostEntryComponent = props => {
  const { title, content } = props;
  return (
    <div>
      <h5>{title}</h5>
      <p>{content}</p>
    </div>
  );
};

export default PostEntryComponent;

PostEntryComponent.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
