import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BookList from '../../containers/books/BookList'
import BookDetail from '../../containers/books/BookDetail'
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <BookList bookList={[]}></BookList>
          <BookDetail></BookDetail>
        </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
