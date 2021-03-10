import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';

const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);

  const inputFile = useRef(null);

  const handleSave = () => {
    // console.log(active);
    dispatch(startSaveNote(active));
  };

  const handlePictureClick = () => {
    inputFile.current.click();
  };

  const fileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(startUploading(file));
    }
  };

  return (
    <div className="notes__appbar">
      <span>28 noviembre 2021</span>
      <input
        ref={inputFile}
        type="file"
        style={{ display: 'none' }}
        onChange={fileChange}
      />
      <div>
        <button className="btn" onClick={handlePictureClick}>
          Picture
        </button>
        <button className="btn" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default NotesAppBar;
