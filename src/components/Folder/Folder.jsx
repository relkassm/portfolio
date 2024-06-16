import React from "react";
import styles from "./Folders.module.css";

function Folder({ title, content, setWindow, clicked, setClicked }) {
  const folderClick = (e) => {
    e.stopPropagation();
    setClicked(title);
  };
  return (
    <div
      className={
        clicked === title
          ? `${styles.folder} ${styles.clicked}`
          : `${styles.folder}`
      }
      onClick={(e) => folderClick(e)}
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
