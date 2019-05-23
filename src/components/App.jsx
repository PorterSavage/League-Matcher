/* eslint-disable max-len */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Champions from './Champions';
import Forum from './Forum';
import CreatePost from './CreatePost';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: [],
    };
    this.handleAddingPostToList = this.handleAddingPostToList.bind(this);
  }

  handleAddingPostToList(post) {
    const { postList } = this.state;
    const newPostList = postList.slice();
    newPostList.push(post);
    this.setState({ postList: newPostList });
  }

  render() {
    const { postList } = this.state;
    return (
      <div>
        <div>
          <style>
            {`
              html {
                background-image: url("https://stmed.net/sites/default/files/league-of-legends-hd-wallpapers-33299-8008243.jpg");
                background-size: cover;
                background-repeat: no-repeat;

              }
            `}
          </style>
        </div>
        <div className="nav">
          <Nav />
        </div>
        <div className="page">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/champions" component={Champions} />
            <Route
              path="/forum"
              render={props => <Forum {...props} postList={postList} />}
            />
            <Route
              path="/createpost"
              render={props => <CreatePost {...props} onAddPostToList={e => this.handleAddingPostToList(e)} />}
            />
          </Switch>
        </div>
      </div>
    );
  }
}


export default App;
