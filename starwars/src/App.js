import React, { Component } from 'react';
import CharacterList from './components/CharacterList'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <div className="Header">
          <button
            onClick={() => this.getCharacters('https://swapi.co/api/people')} 
            className="back">
            ←
          </button>
          <h1>React Wars</h1>
          <button 
            onClick={() => this.getCharacters('https://swapi.co/api/people/?page=2')} 
            className="next">
            →
          </button>
        </div>
        <CharacterList characters={this.state.starwarsChars}/>
      </div>
    );
  }
}

export default App;
