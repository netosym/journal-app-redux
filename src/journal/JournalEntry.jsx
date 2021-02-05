const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: 'cover',
          backgroundImage:
            'url(https://i.pinimg.com/originals/cb/16/bb/cb16bb284a2a80c75041c80ba63e62d3.jpg)',
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="journal__entry-title">Today is a new day</p>
        <p className="journal__entry-content">
          Hello I hope you're OK and everyone you love too
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  );
};

export default JournalEntry;
