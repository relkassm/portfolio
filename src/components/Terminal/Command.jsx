import React from "react";

const Command = ({ command, setCommand, inputRef, submitCommand }) => {
  return (
    <form onSubmit={submitCommand}>
      <input
        ref={inputRef}
        autoFocus
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        onKeyDown={(e) => e.key === "Tab" && e.preventDefault()}
        maxLength="30"
      />
      <input type="submit" style={{ display: "none" }} />
    </form>
  );
};

export default Command;
