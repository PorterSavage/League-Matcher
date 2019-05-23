import React from 'react';
import PropTypes from 'prop-types';
import ChampionList from './ChampionList';

function Champions(props) {
  const { championList } = props;
  return (
    <div>
      <div>
        <style>
          {`
            .champions {
              text-align: center;
              color: #F1D773;
              text-shadow: 2px 2px black;
            }
          `}
        </style>
      </div>
      <div className="champions">
        <h1>Champions</h1>
      </div>
      <div className="grid">
        <div className="champions">
          <ChampionList
            championList={championList}
          />
        </div>
      </div>
    </div>
  );
}

Champions.propTypes = {
  championList: PropTypes.string.isRequired,
};

export default Champions;
