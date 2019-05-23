/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
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
            .header {
              text-align: center;
              color: #F1D773;
              text-shadow: 2px 2px black;
            }

            textarea {
              border: 2px solid #ddd;
              box-shadow: none;
              height: 200px;
              width: 50%;
              margin-bottom: 1em;
            }

            .form {
              margin-top: 75px;
              text-align: center;
            }

            .pure-form label {
              margin: 1em 0 0;
              font-weight: bold;
              font-size: 100%;
              color: #F1D773;
              text-shadow: 2px 2px black;

            }
          
            .pure-form input[type] {
              border: 2px solid #ddd;
              box-shadow: none;
              font-size: 100%;
              width: 50%;
              margin-bottom: 1em;
            }
            .pure-button-primary {
              background: white;
              color: #1f8dd6;
              border-radius: 5px;
              font-size: 120%;
              border: 2px solid #ddd;
            }
          `}
        </style>
      </div>
      <div className="header">
        <h1>Create Thread</h1>
      </div>
      <div className="center">
        <div className="form">
          <form className="pure-form" onSubmit={handleNewPostSubmission}>
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
            <br />
            <label htmlFor="body">Body: </label>
            <textarea
              name="body"
              ref={(textarea) => { body = textarea; }}
            />
            <br />
            <button className="pure-button-primary" id="post" type="submit">Post</button>
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
