import React from 'react'
import {connect} from 'react-redux'
import {List, ListItem} from 'material-ui/List';

class BookList extends React.Component{

  renderList(){
    return this.props.books.map((book) => {
      return(
        <ListItem key={book.id} primaryText={book.title} />
      )
    });
  }

  render(){
    return(
      <List>
        { this.renderList() }
      </List>
    )
  }
}

function mapStateToProps(state) {
  return{
    books: state.books
  }
}

export default connect(mapStateToProps)(BookList)

