import React from 'react'
import { connect } from 'react-redux'

class BookDetail extends React.Component{

  renderBook(){
    if(!this.props.book){
      return(
        <div>Select a book</div>

      )
    }
    return (
      <div>
        <h3>Book Details</h3>
      Title: {this.props.book.title}
      </div>
    )
  }

  render(){
    return(
      this.renderBook()
    )
  }
}

function mapStateToProps(state){
  return {
    book: state.currentBook
  };
}
export default connect(mapStateToProps)(BookDetail)