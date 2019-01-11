import React, { Component } from 'react';
import CharacterList from './components/CharacterList'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      url: '',
      page: 0,
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/?page=1');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        // update the url and page items of state based on the url which is grabbed, and the last character which corresponds to the page number
        this.setState({ 
          url: res.url,
          page: res.url[res.url.length -1]
        })
        return res.json();
      })
      // set the state.starwarsChars to the results property of the data object
      .then(data => {
        this.setState({ 
          starwarsChars: data.results,
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    // declare the previous and next URLs for pagination
    const prevURL = this.state.url.slice(0, this.state.url.length - 1) + (this.state.page - 1);
    const nextURL = this.state.url.slice(0, this.state.url.length - 1) + (parseFloat(this.state.page) + 1);
    // grab the current page number
    const pageNumber= this.state.page;
    // if the page number is 1, render app with no back button
    if (pageNumber < 2) {
      return (
        <div className="App">
          <div className="Header">
            <h1>React Wars</h1>
            <button 
              onClick={() => this.getCharacters(nextURL)} 
              className="next">
              →
            </button>
          </div>
          <CharacterList characters={this.state.starwarsChars} page={this.state.page}/>
        </div>
      );
      // if on pages 2-8 render app with back and forward buttons
    } else if (pageNumber < 9) {
      return (
        <div className="App">
          <div className="Header">
            <button
              onClick={() => 
                this.getCharacters(prevURL)}
              className="back">
              ←
            </button>
            <h1>React Wars</h1>
            <button 
              onClick={() => this.getCharacters(nextURL)} 
              className="next">
              →
            </button>
          </div>
          <CharacterList characters={this.state.starwarsChars} page={this.state.page}/>
        </div>
      );
      // if on page 9 render app with no forward button
    } else {
      return (
        <div className="App">
          <div className="Header">
            <button
              onClick={() => 
                this.getCharacters(prevURL)}
              className="back">
              ←
            </button>
            <h1>React Wars</h1>
          </div>
          <CharacterList characters={this.state.starwarsChars} page={this.state.page}/>
        </div>
      );
    }
  }
}

export default App;

