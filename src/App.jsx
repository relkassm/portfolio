import { useState } from "react";
import Menu from "./components/Menu/Menu";
import Desktop from "./components/Desktop";
import Dock from "./components/Dock/Dock";

import styles from "./App.module.css";

const App = () => {
  const [window, setWindow] = useState({ title: "", content: "" });
  const [folderClicked, setFolderClicked] = useState("");
  const [focused, setFocused] = useState(true);

  const resetWindow = () => {
    setFolderClicked("");
    setFocused(false);
  };

  return (
    <div className={`${styles.container} ${styles.noselect}`} onClick={() => resetWindow()}>
      <Menu />
      <Desktop
        window={window}
        setWindow={setWindow}
        clicked={folderClicked}
        setClicked={setFolderClicked}
        focused={focused}
        setFocused={setFocused}
      />
      <Dock />
    </div>
  );
};

export default App;
