import React, { Component, useState } from 'react';
import './App.css';
import UserInput from './UserInput';
import UserOutput from './UserOutput';

class App extends Component {

  state = {
    userName: 'Anurag Keerthi'
  }

  userNameChangedHandler = (event) => {
    this.setState({userName: event.target.value})
  }

  render() {
  
    return (
      <div className="App">
        <UserInput changed = { this.userNameChangedHandler}  currentName={this.state.userName}/>
        <UserOutput userName={this.state.userName} />

      </div>
    );
  }
}

export default App;
