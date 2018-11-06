import React, { Component } from 'react';
import './App.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Posts from './components/Posts';
import PostForm from './components/Postform';

const store = createStore(() => [], {}, applyMiddleware);

class App extends Component {
  render() {
    return(
      <Provider store={store}>
      <div>
        <h1>My React App! </h1>
        <PostForm />
        <hr />
        <Posts />
        <br />
      </div>
    </Provider>
    )
  }
}

export default App;
