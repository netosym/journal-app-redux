import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activateNote } from '../../actions/notes';

const JournalEntry = ({ id, date, title, body, url, image }) => {
  const dispatch = useDispatch();
  const noteDate = moment(date);

  const handleSelect = () => {
    dispatch(activateNote(id, { body, date, title, url, image }));
  };

  return (
    <div onClick={handleSelect} className="journal__entry pointer">
      {url && (
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: 'cover',
            backgroundImage: `url(${url})`,
          }}
        ></div>
      )}
      <div className="journal__entry-body">
        <p className="journal__entry-title">{title}</p>
        <p className="journal__entry-content">{body}</p>
      </div>
      <div className="journal__entry-date-box">
        <span>{noteDate.format('dddd')}</span>
        <h4>{noteDate.format('Do')}</h4>
      </div>
    </div>
  );
};

export default JournalEntry;
