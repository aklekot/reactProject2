import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import listsReducer from './listRedux.js';
import columnsReducer from './columnsRedux.js';
import cardsReducer from './cardsRedux.js';
import searchStringReducer from './searchStringRedux.js';


const ADD_COLUMN = 'ADD_COLUMN';
const ADD_CARD = 'ADD_CARD';
const ADD_LIST = 'ADD_LIST';
const UPDATE_SEARCHSTRING = 'UPDATE_SEARCHSTRING';
const TOGGLE_CARD_FAVORITE = 'TOGGLE_CARD_FAVORITE';
const REMOVE_CARD = 'REMOVE_CARD';

export const getFilteredCards = ({ cards }, columnId) => {
  return cards.filter(card => card.columnId === columnId);
};

export const updateSearchStringAction = (searchString) => ({
  type: UPDATE_SEARCHSTRING,
  payload: searchString,
});

export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);

export const getAllLists = (state) => state.lists;

export const getColumnsByListId = (state, listId) => state.columns.filter(column => column.listId === listId);

export const addListAction = (list) => ({
  type: ADD_LIST,
  payload: list,
});

export const removeCardAction = (id) => ({
  type: REMOVE_CARD,
  payload: id,
});

export const toggleCardFavoriteAction = (id) => ({
  type: TOGGLE_CARD_FAVORITE,
  payload: id,
});

export const getFavoriteCards = ({ cards }) =>
  cards.filter(card => card.isFavorite);

const searchingString = '';
const addColumnAction = (column) => ({
  type: ADD_COLUMN,
  payload: column,
});

const addCardAction = (card) => ({
  type: ADD_CARD,
  payload: card,
});

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { addColumnAction, addCardAction };
export default store;