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
        <style jsx global>
          {`
            .postDiv {
              border: 2px solid #AB8C52;
              margin-top: 8px;
              width: 50%;
              background-image: url("https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/J9H9WF0/videoblocks-glitter-blue-teal-background-with-sparkling-colorful-light-particles_ssyw7q50l_thumbnail-full01.png");
              border-radius: 5px;
              color: #F1D773;
              text-shadow: 2px 2px black;
            }
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
