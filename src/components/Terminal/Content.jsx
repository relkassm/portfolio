import React, { useRef, useEffect } from "react";
import styles from "./Terminal.module.css";

const Content = ({ content }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [content]);

  return (
    <div className={styles.content} ref={contentRef}>
      <span dangerouslySetInnerHTML={{ __html: content}}/>
    </div>
  );
};

export default Content;
