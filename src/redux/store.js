import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import strContains from '../utils/strContains';


export const getFilteredCards = ({ cards }, columnId) => {
  return cards.filter(card => card.columnId === columnId);
};


export const updateSearchStringAction = (searchString) => ({
  type: UPDATE_SEARCHSTRING,
  payload: searchString,
});

export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);

export const getAllLists = (state) => state.lists;

export const getColumnsByListId = (state, listId) =>
  state.columns.filter(column => column.listId === listId);

export const addListAction = (list) => ({
  type: ADD_LIST,
  payload: list,
});

const ADD_COLUMN = 'ADD_COLUMN';
const ADD_CARD = 'ADD_CARD';
const ADD_LIST = 'ADD_LIST';
const UPDATE_SEARCHSTRING = 'UPDATE_SEARCHSTRING';
const TOGGLE_CARD_FAVORITE = 'TOGGLE_CARD_FAVORITE';

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

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return {
        ...state, columns: [
          ...state.columns,
          {
            id: state.columns.length + 1,
            title: action.payload.title,
            icon: action.payload.icon,
            listId: action.payload.listId,
          },
        ],
      };
    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, { ...action.payload, id: shortid() }] };
    case 'UPDATE_SEARCHSTRING':
      return { ...state, searchString: action.payload };
    case ADD_LIST:
      return {
        ...state,
        lists: [
          ...state.lists,
          {
            id: state.lists.length + 1,
            ...action.payload,
          },
        ],
      };
    case TOGGLE_CARD_FAVORITE:
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.id === action.payload ? { ...card, isFavorite: !card.isFavorite } : card
        ),
      };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { addColumnAction, addCardAction };
export default store;