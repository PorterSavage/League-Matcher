import React from 'react';
import Champion from './Champion';

class ChampionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      champions: [],
      isLoaded: false,
    };
  }

  componentWillMount() {
    fetch('http://ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/champion.json')
      .then(res => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          champions: Object.values(json.data),
        });
      });
  }

  render() {
    const { isLoaded, champions } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <div>
          <style jsx global>
            {`
              .championPage {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
                border: 1px solid black;
                text-align: center;
              }
            `}
          </style>
        </div>
        <div className="championPage">
          {champions.map(champion => (
            <Champion
              key={champion.id}
              name={champion.name}
              title={champion.title}
              image={champion.image.full}
            />
          ))}
        </div>
      </div>
    );
  }
}


export default ChampionList;
