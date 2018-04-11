import fetch from 'isomorphic-fetch';
import React, { Component } from 'react';
import './App.css';
import Headline from './Headline';

let currentAnswer;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { headline: 'This is just the beginning, please proceed by clicking next.' }
    this.newHeadline = this.newHeadline.bind(this);
    this.showAnswer = this.showAnswer.bind(this);
  }

  newHeadline() {
    fetch('/newHeadline')
    .then(response => {return response.json()})
    .then((response) => {
      let currentHeadline = response[Math.floor(Math.random() * response.length)];
      currentAnswer = Object.keys(currentHeadline)[0];
      this.setState(Object.assign(
        this.state,
        { headline: Object.values(currentHeadline)[0] })
      )
    });
  }

  showAnswer() {
    this.setState({
      headline: this.state.headline.replace('_____', currentAnswer)
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">wait, what?</h1>
          <p className="App-intro">
            Split into teams and try to complete the headline
            <br/>
            When both teams have guessed, reveal the answer and see who was closest!
          </p>
        </header>
        <div className='game-space'>
          <Headline headline={this.state.headline} />
          <button id='submit' onClick={() => this.showAnswer()}>Show Answer</button>
          <button id='next' onClick={() => this.newHeadline()}>Next</button>
        </div>
      </div>
    );
  }
}

export default App;
