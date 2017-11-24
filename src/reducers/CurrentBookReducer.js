// state argument is not the application state, but only the state this reducer is responsible for
export default function (state = null, action) {
  switch(action.type){
    case "CURRENT_BOOK_SELECTED":
      return action.payload
  }
  return state
}