import React from 'react';
import PostList from './PostList';

function Forum(props) {
  const postList = props;

  return (
    <div>
      <div>
        <style>
          {`

          `}
        </style>
      </div>
      <div className="forumDiv">
        <h1>Forum</h1>
      </div>
      <div className="grid">
        <div className="posts">
          <PostList
            postList={postList}
          />
        </div>
      </div>
    </div>
  );
}

export default Forum;
