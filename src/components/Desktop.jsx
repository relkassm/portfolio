import { useState } from "react";

import Window from "./Window/Window";
import Folders from "./Folder/Folders";

const Desktop = () => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState(1);
  const [clicked, setClicked] = useState("");
  return (
    <>
      {title && (
        <Window
          title={title}
          setTitle={setTitle}
          priority={priority}
          setPriority={setPriority}
        />
      )}
      <Folders setTitle={setTitle} clicked={clicked} setClicked={setClicked} />
    </>
  );
};

export default Desktop;
