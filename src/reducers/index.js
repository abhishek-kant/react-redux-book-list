import { combineReducers } from 'redux';
import BooksReducer from "./BooksReducer";
import CurrentBookReducer from "./CurrentBookReducer"

const rootReducer = combineReducers({
  books: BooksReducer,
  currentBook: CurrentBookReducer
});

export default rootReducer;