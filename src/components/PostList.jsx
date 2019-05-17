import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';


function PostList(props) {
  const { postList } = props;
  return (
    <div>
      <div>
        <style>
          {`

          `}
        </style>
      </div>
      <div className="post">
        {postList.postList.map(post => (
          <Post
            title={post.title}
            roles={post.roles}
            body={post.body}
            key={post.id}
          />
        ))}
      </div>
    </div>
  );
}

PostList.propTypes = {
  postList: PropTypes.instanceOf(Array).isRequired,
};

export default PostList;
