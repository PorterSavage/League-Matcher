import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {
  const {
    title,
    roles,
    body,
  } = props;

  return (
    <div>
      <div>
        <style>
          {`

          `}
        </style>
      </div>
      <div className="postDiv">
        <h2>{title}</h2>
        <p>{roles}</p>
        <p><em>{body}</em></p>
      </div>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  roles: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default Post;
