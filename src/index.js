import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Game extends React.Component {
  render() {
    return(
      <div>
        <Logo />
        <RandomPost />
        <Result />
        <TryAgainButton />
      </div>
    );
  }
}

class Logo extends React.Component {
  render() {
    return <h1>Reddt Guessgame</h1>;
  }
}

class RandomPost extends React.Component {
  render() {
    return(
      <p className="post">{this.props.postName}</p>
    );
  }
}

class Result extends React.Component {
  render() {
    return <span>{this.props.won ? 'Ding ding !' : 'Try Again !'}</span>
  }
}

class TryAgainButton extends React.Component {
  render() {
    return <button>Get New Post</button>
  }
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
