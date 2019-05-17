import React from 'react';

function CreatePost(props) {
  let title = null;
  let roles = null;
  let body = null;

  function handleNewPostSubmission(e) {
    e.preventDefault();
    
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
          <Form onSubmit={handleNewPostSubmission}>
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
          </Form>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
