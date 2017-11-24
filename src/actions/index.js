export function selectCurrentBook(book) {
  //an action creator. needs to return an action(an object with type property)
  return{
    type: "CURRENT_BOOK_SELECTED",
    payload: book
  }
}