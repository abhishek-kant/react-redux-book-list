import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BookList from '../BookList'
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <BookList bookList={[]}></BookList>
        </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
