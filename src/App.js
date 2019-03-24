import React, { Component } from 'react';

import item from './items';

class App extends Component {
  render() {
    return <div className="App">{item()}</div>;
  }
}

export default App;
