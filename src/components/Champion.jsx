/* eslint-disable prefer-template */
import React from 'react';
import PropTypes from 'prop-types';

function Champion(props) {
  const {
    name,
    title,
    image,
  } = props;
  return (
    <div>
      <div>
        <style>
          {`

          `}
        </style>
      </div>
      <div className="championDiv">
        <h2>{name}</h2>
        <img src={'http://ddragon.leagueoflegends.com/cdn/9.3.1/img/champion/' + image} alt="api call" />
        <br />
        <em>{title}</em>
        <hr />
      </div>
    </div>
  );
}

Champion.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Champion;
