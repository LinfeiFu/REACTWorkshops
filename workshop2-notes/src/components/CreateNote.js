import LinearProgress from "@mui/material/LinearProgress";

const CreateNote = ({ handleText, addNote, inputText }) => {
  const charLimit = 100;
  const charLeft = charLimit - inputText.length;
  return (
    <div className="note">
      <textarea
        cols={10}
        rows={5}
        value={inputText}
        placeholder="Type..."
        maxLength={charLimit}
        onChange={handleText}
      ></textarea>
      <div className="note__footer">
        <span className="label">{charLeft} left</span>
        <button className="note__saver" onClick={addNote}>
          Save
        </button>
      </div>
      <LinearProgress
        className="char__progress"
        variant="determinate"
        value={charLeft}
      />
    </div>
  );
};

export default CreateNote;
