import React, { Component } from 'react';
import './App.css';
import BudgetCard from './JS-Library/BudgetCard'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tech: 'test'
    };
  }

  changeTech = (techName) => {
    this.setState({tech: techName});
  }

  render() {
    return (
      <div className="App">
        <head>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
        </head>
        <BudgetCard />
      </div>
  );
  }
}

export default App;
