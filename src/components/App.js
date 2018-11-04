import React, { Component } from 'react';

import Posts from './Posts'
import Postform from './Postform'

class App extends Component {
  render() {
    return(
      <div>
        <h1>my react app!</h1>
        <Posts />
      </div>
    )
  }
}

export default App;
