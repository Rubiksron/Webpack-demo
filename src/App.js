import React, { Component } from 'react';
import './App.js';

import Posts from './components/Posts';
import PostForm from './components/Postform';


class App extends Component {
  render() {
    return(
      <div>
        <h1>My React App! </h1>
        <PostForm />
        <hr />
        <Posts />
        <br />
      </div>
    )
  }
}

export default App;
