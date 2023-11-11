import React from "react";
import styles from "./Folders.module.css";

function Folder({ name, setTitle, clicked, setClicked }) {
  return (
    <div
      className={
        clicked === name
          ? `${styles.folder} ${styles.clicked}`
          : `${styles.folder}`
      }
      onClick={() => setClicked(name)}
      onDoubleClick={() => setTitle(name)}
    >
      <img src="folder.png" alt={name} />
      <span>{name}</span>
    </div>
  );
}

export default Folder;
