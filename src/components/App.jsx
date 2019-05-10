import React from 'react';
import Nav from './Nav';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      champions: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json')
      .then(res => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          champions: json,
        });
      });
  }

  render() {
    return (
      <div>
        <div>
          <style>
            {`
  
            `}
          </style>
        </div>
        <div>
          <Nav />
        </div>
      </div>
    );
  }
}

export default App;
