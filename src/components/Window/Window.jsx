// import { useState } from "react";

import styles from "./Windows.module.css";

const Window = ({ title, setTitle }) => {
  return (
    <div className={styles.window}>
      <div className={styles.nav}>
        <div
          className={`${styles.round} ${styles.close}`}
          onClick={() => {
            setTitle("");
          }}
        ></div>
        <div className={`${styles.round} ${styles.reduce}`}></div>
        <div className={`${styles.round} ${styles.expand}`}></div>
        <h2 className={styles.title}>{title}</h2>
      </div>
    </div>
  );
};

export default Window;
