import Item from "./Item";

import { useState } from "react";

import styles from "./Dock.module.css";

const Dock = () => {
  const [selected, setSelected] = useState();
  const items = [
    { id: 1, value: "c" },
    { id: 2, value: "node" },
    { id: 3, value: "react" },
    { id: 4, value: "mongo" },
    { id: 5, value: "mysql" },
    { id: 6, value: "javascript" },
    { id: 7, value: "typescript" },
    { id: 8, value: "html" },
    { id: 9, value: "css" },
    { id: 10, value: "git" },
    { id: 11, value: "docker" },
    { id: 12, value: "wordpress" },
    { id: 13, value: "jira" },
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
