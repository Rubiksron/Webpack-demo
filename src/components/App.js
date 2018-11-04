import React, { Component } from 'react';

import Posts from './Posts'
import PostForm from './Postform'

class App extends Component {
  render() {
    return(
      <div>
        <h1>my react app!</h1>
        <PostForm />
        <hr />
        <Posts />
        <br />
      </div>
    )
  }
}

export default App;
