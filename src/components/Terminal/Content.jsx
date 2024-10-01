import React, { useRef, useEffect, useState } from "react";
import styles from "./Terminal.module.css";

const Content = ({ content }) => {
  const contentRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
    setCurrentIndex(0)
  }, [content]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (content.data && content.data.length > 1) {
        if (event.key === "ArrowRight") {
          setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, content.data.length - 1));
        } else if (event.key === "ArrowLeft") {
          setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [content.data]);

  return (
    <div className={styles.content}>
      <span
        ref={contentRef}
        dangerouslySetInnerHTML={{ __html: content.value }}
      />
      {content.data && content.data[currentIndex] && (
        <>
          <span>
            <strong>{content.data[currentIndex].title}</strong>
          </span>
          <span>{content.data[currentIndex].text}</span>
          {content.data[currentIndex].image && (
            <img
              src={content.data[currentIndex].image}
              alt={content.data[currentIndex].text}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Content;
