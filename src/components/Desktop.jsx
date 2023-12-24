import { useState } from "react";

import Window from "./Window/Window";
import Folders from "./Folder/Folders";

const Desktop = () => {
  const [priority, setPriority] = useState(1);
  const [clicked, setClicked] = useState("");
  const [window, setWindow] = useState({ title: "", content: "", priority: 0 });

  return (
    <>
      {window.title && (
        <Window
          window={window}
          setWindow={setWindow}
          priority={priority}
          setPriority={setPriority}
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
