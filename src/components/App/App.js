import React, { Component } from 'react';
import BookList from '../BookList'
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BookList bookList={[]}></BookList>
      </div>
    );
  }
}

export default App;
