import React from 'react';
import v4 from 'uuid';
import PropTypes from 'prop-types';

function CreatePost(props) {
  let title = null;
  let roles = null;
  let body = null;

  function handleNewPostSubmission(e) {
    e.preventDefault();
    props.onAddPostToList({
      title: title.value, roles: roles.value, body: body.value, id: v4(),
    });
    title.value = '';
    roles.value = '';
    body.value = '';
  }

  return (
    <div>
      <div>
        <style>
          {`

          `}
        </style>
      </div>
      <div className="center">
        <div className="form">
          <form onSubmit={handleNewPostSubmission}>
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              ref={(input) => { title = input; }}
            />
            <br />
            <label htmlFor="roles">Roles: </label>
            <input
              type="text"
              ref={(input) => { roles = input; }}
            />
            <label htmlFor="body">Body: </label>
            <textarea
              name="body"
              ref={(textarea) => { body = textarea; }}
            />
            <button id="post" type="submit">Post</button>
          </form>
        </div>
      </div>
    </div>
  );
}

CreatePost.propTypes = {
  onAddPostToList: PropTypes.func.isRequired,
};

export default CreatePost;
