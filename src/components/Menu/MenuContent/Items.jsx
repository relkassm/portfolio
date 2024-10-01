import { useState } from "react";

import styles from "../Menu.module.css";

const Items = () => {
  const [selected, setSelected] = useState("");
  const list = ["About", "Training", "Career", "Expertise", "Tools"];

  return (
    <>
      <img
        src="logo.png"
        alt="logo"
        className={selected === "logo" ? styles.selected : ""}
        onMouseEnter={() => {
          setSelected("logo");
        }}
        onMouseLeave={() => {
          setSelected("");
        }}
      />
      {list.map((item) => (
        <span
          key={list.indexOf(item)}
          className={selected === item ? styles.selected : ""}
          onMouseEnter={() => {
            setSelected(item);
          }}
          onMouseLeave={() => {
            setSelected("");
          }}
        >
          {item}
        </span>
      ))}
    </>
  );
};

export default Items;
