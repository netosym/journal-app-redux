import { types } from '../types/types';

const initialState = {
  notes: [],
  active: null,
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.notesAddNew:
      return {
        ...state,
        notes: [action.payload, ...state.notes],
      };

    case types.notesActive:
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };
    default:
      return state;

    case types.notesLoad:
      return {
        ...state,
        notes: [...action.payload],
      };

    case types.notesUpdated:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload.note : note
        ),
      };

    case types.notesDelete:
      return {
        ...state,
        active: null,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };

    case types.notesCleanLogout:
      return {
        ...state,
        notes: [],
        active: null,
      };
  }
};

export default notesReducer;
