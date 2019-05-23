import React from 'react';
import Champion from './Champion';
import ChampionModal from './ChampionModal';

class ChampionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      champions: [],
      isLoaded: false,
      championName: null,
      modalIsOpen: false,
    };
    this.handleChampionDescription = this.handleChampionDescription.bind(this);
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

  handleChampionDescription(userClickedImage) {
    let clickedChampionImage = userClickedImage;
    this.setState({
      championName: clickedChampionImage,
      modalIsOpen: true,
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
                border: 1px solid #F1D773;
                text-align: center;
              }
              
              .champDescription {
                text-shadow: 1px 1px gold;
                color: black;
              }
            `}
          </style>
        </div>
        <div className="champDescription">
          <ChampionModal
            championName={this.state.championName} 
          />
        </div>
        <div className="championPage">
          {champions.map(champion => (
            <Champion
              onChampionClicked={this.handleChampionDescription}
              championId={champion.id}
              key={champion.id}
              name={champion.name}
              title={champion.title}
              image={champion.image.full}
              description={champion.blurb}
            />
          ))}
        </div>
      </div>
    );
  }
}


export default ChampionList;
