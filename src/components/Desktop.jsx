import Terminal from "./Terminal/Terminal";
import Folders from "./Folder/Folders";

const Desktop = ({
  window,
  setWindow,
  clicked,
  setClicked,
  focused,
  setFocused,
}) => {
  return (
    <>
      {window.title && (
        <Terminal
          window={window}
          setWindow={setWindow}
          focused={focused}
          setFocused={setFocused}
        />
      )}
      <Folders
        setWindow={setWindow}
        clicked={clicked}
        setClicked={setClicked}
      />
    </>
  );
};

export default Desktop;
