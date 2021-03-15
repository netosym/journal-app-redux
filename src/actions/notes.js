import Swal from 'sweetalert2';
import { db } from '../firebase/firebaseConfig';
import { fileUpload } from '../helpers/fileUpload';
import { loadNotes } from '../helpers/loadNotes';
import { types } from '../types/types';

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    };
    const docRef = await db.collection(`${uid}/journal/notes`).add(newNote);
    dispatch(activateNote(docRef.id, newNote));
    dispatch(createNote(docRef.id, newNote));
  };
};

export const createNote = (id, note) => ({
  type: types.notesAddNew,
  payload: {
    id,
    ...note,
  },
});

export const activateNote = (id, note) => {
  return {
    type: types.notesActive,
    payload: {
      id,
      ...note,
    },
  };
};

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const setNotes = (notes) => {
  return {
    type: types.notesLoad,
    payload: notes,
  };
};

export const startSaveNote = (note) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    if (!note.url) {
      delete note.url;
    }

    const noteToFirestore = { ...note };
    delete noteToFirestore.id;

    await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);

    dispatch(refreshNote(note.id, note));
    Swal.fire('Saved', note.title, 'success');
  };
};

export const refreshNote = (id, note) => {
  return {
    type: types.notesUpdated,
    payload: {
      id,
      note,
    },
  };
};

export const startUploading = (file) => {
  return async (dispatch, getState) => {
    const { active } = getState().notes;
    Swal.fire({
      title: 'Uploading....',
      text: 'Please Wait',
      allowOutsideClick: false,
      willOpen: () => {
        Swal.showLoading();
      },
    });
    const fileUrl = await fileUpload(file);
    active.url = fileUrl;
    console.log(active);
    dispatch(startSaveNote(active));
    Swal.close();
  };
};

export const startDelete = (id) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    await db.doc(`${uid}/journal/notes/${id}`).delete();
    dispatch(deleteNote(id));
    Swal.fire('Deleted', 'Note deleted', 'success');
  };
};

export const deleteNote = (id) => ({
  type: types.notesDelete,
  payload: id,
});

export const noteLogout = () => ({
  type: types.notesCleanLogout,
});
