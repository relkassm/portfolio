import React from "react";
import styles from "./Folders.module.css";

function Folder({ name }) {
  return (
    <div className={styles.folder}>
      <img src="folder.png" alt={name} />
      <span>{name}</span>
    </div>
  );
}

export default Folder;
