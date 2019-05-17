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

          `}
        </style>
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
