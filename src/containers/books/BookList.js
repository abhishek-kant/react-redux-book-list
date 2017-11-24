import React from 'react'
import {connect} from 'react-redux'
import {List, ListItem} from 'material-ui/List';
import { bindActionCreators }  from 'redux'
import { selectCurrentBook } from '../../actions'


class BookList extends React.Component{

  renderList(){
    return this.props.books.map((book) => {
      return(
        <ListItem onClick={ () => { this.props.selectCurrentBook(book) } } key={book.id} primaryText={book.title} />
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

// anything return from this function will end up as props inside booklist container
function mapDispatchToProps(dispatch){
  // whenever selectCurrentBook is called, the result should be passed to all the reducers
  return bindActionCreators({ selectCurrentBook: selectCurrentBook }, dispatch)
}

//promotes BookList from a component to a container - it needs to know about this new
// dispatch method, selectBook. Make is available as a prop

export default connect(mapStateToProps, mapDispatchToProps)(BookList)

