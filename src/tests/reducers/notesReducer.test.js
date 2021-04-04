import notesReducer from '../../reducers/notesReducer';
import { types } from '../../types/types';

describe('Tests in notesReducer', () => {
  test('should add new note', () => {
    const initialState = {
      notes: [],
      active: null,
    };

    const action = {
      type: types.notesAddNew,
      payload: {
        id: '123',
        note: {
          title: 'title',
        },
      },
    };

    const state = notesReducer(initialState, action);
    expect(state).toEqual({
      notes: [{ id: '123', note: { title: 'title' } }],
      active: null,
    });
  });

  test('should add new note', () => {
    const initialState = {
      notes: [],
      active: null,
    };

    const notesToLoad = [{ title: 'one' }, { title: 'one' }];

    const action = {
      type: types.notesLoad,
      payload: notesToLoad,
    };

    const state = notesReducer(initialState, action);
    console.log(state);
    expect(state).toEqual({ ...initialState, notes: notesToLoad });
  });
});
