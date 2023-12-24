import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./Windows.module.css";

const Window = ({ window, setWindow }) => {
  return (
    <div className={styles.window}>
      <div className={styles.nav}>
        <div
          className={`${styles.round} ${styles.close}`}
          onClick={() => {
            setWindow((prevWindow) => ({ ...prevWindow, title: "" }));
          }}
        ></div>
        <div className={`${styles.round} ${styles.reduce}`}></div>
        <div className={`${styles.round} ${styles.expand}`}></div>
        <h2 className={styles.title}>{window.title}</h2>
      </div>
      <div className={styles.main}>
        <FontAwesomeIcon icon={faArrowRight} style={{ color: "#5FFA68" , height: '0.8vw'}} />
        <strong>~</strong>
        <span> {window.content}</span>
      </div>
    </div>
  );
};

export default Window;
