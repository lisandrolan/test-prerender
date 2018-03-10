import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Helmet from 'react-helmet';
class App extends Component {
  render() {
    return (
      <div className="App">
       <Helmet title="You Are Doing Great"
        meta={[
          {property: 'og:title', content: 'The Rock'},
          {property: 'og:image', content: 'http://ia.media-imdb.com/images/rock.jpg'},
          {property: 'og:type', content: 'video.movie'},
          {property: 'og:url', content: 'http://www.imdb.com/title/tt0117500/'},
      ]}/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
