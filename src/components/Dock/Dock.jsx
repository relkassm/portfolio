import Item from "./Item";

import { useState } from "react";

import styles from "./Dock.module.css";

const Dock = () => {
  const [selected, setSelected] = useState();
  const items = [
    { id: 1, value: "c" },
    { id: 2, value: "java" },
    { id: 3, value: "python" },
    { id: 4, value: "node" },
    { id: 5, value: "react" },
    { id: 6, value: "catalyst" },
    { id: 7, value: "mysql" },
    { id: 8, value: "mongo" },
    { id: 9, value: "html" },
    { id: 10, value: "css" },
    { id: 11, value: "javascript" },
    { id: 12, value: "typescript" },
    { id: 13, value: "git" },
    { id: 14, value: "docker" },
    { id: 15, value: "wordpress" },
    { id: 16, value: "jira" },
  ];

  return (
    <div className={styles.dock}>
      {items.map((item) => (
        <div
          className={`${styles.item} 
          ${selected === item.id ? styles.selected : ""}
          ${selected === item.id + 1 ? styles.sides : ""}
          ${selected === item.id - 1 ? styles.sides : ""}
          `}
          key={item.id}
          onMouseEnter={() => {
            setSelected(item.id);
          }}
          onMouseLeave={() => {
            setSelected();
          }}
        >
          <Item technology={item} />
        </div>
      ))}
    </div>
  );
};

export default Dock;
