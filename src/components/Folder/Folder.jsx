import React from "react";
import styles from "./Folders.module.css";

function Folder({ title, content, setWindow, clicked, setClicked }) {
  return (
    <div
      className={
        clicked === title
          ? `${styles.folder} ${styles.clicked}`
          : `${styles.folder}`
      }
      onClick={() => setClicked(title)}
      onDoubleClick={() =>
        setWindow((prevWindow) => ({
          ...prevWindow,
          title: title,
          content: content,
        }))
      }
    >
      <img src="folder.png" alt={title} />
      <span>{title}</span>
    </div>
  );
}

export default Folder;
